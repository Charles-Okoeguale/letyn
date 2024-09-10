import { StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, View, TextInput, Modal, Image, ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import { calculateEm, calculateFontsize, calculatePercentageDimension, screenWidth } from '../../utils/helpers';
import { useForm } from '../../Context/FormContext';
import CustomButton from '../../components/button';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Container from '../../components/Container/container';
import StatusItem from '../../components/status_item';


const EstateLogin = ({ navigation }) => {
  const { estateLogin, setEstateLogin, setToken, loading, setChecked, checked} = useForm();
  const [modal, setModal] = useState(false)
  const [matches, setMatches] = useState()

  const onButtonClick = () => {
    handleButtonClick({
        estateName,
        password,
        setMatches,
        setModal
    });
  };

  const onSelectOption = async (name, id) => {
      await selectOption({
          name,
          id,
          password: estateLogin.password,
          setEstateLogin,
          setToken,
          setModal
      });
  };

  const handleCheckbox = () => {
    setChecked(prev => !prev)
  }



    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.img}>
        <Image
          source={require('../../assets/unnamed 1.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Welcome back</Text>
      <Text style={styles.text2}>Login to your estate account</Text>
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} 
      >
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder={'Enter estate name'} 
          placeholderTextColor={'#9EA0A4'}
          onChangeText={(text) => setEstateLogin({...estateLogin, estateName: text})}
          value={estateLogin.estateName}
        />
        <TextInput
          style={styles.input} 
          placeholder={'Enter your password'} 
          placeholderTextColor={'#9EA0A4'}
          onChangeText={(text) => setEstateLogin({...estateLogin, password: text})}
          value={estateLogin.password}
          secureTextEntry={checked ? false : true}
        />
        <StatusItem
            text={'Show password'} 
            indicatorColor={'#FFFFFF'} 
            containerStyle={styles.containerStyle}
            handleCheckbox={handleCheckbox}
            checked={checked}
        />
      </View>
      </KeyboardAvoidingView>
      <CustomButton
        text={'Continue'}
        fontFamily={'Bold'}
        fontSize={calculateFontsize(14)}
        buttonStyle={styles.button}
        onClick={onButtonClick}
        textStyle={styles.text3}
        iconSize={calculateEm(20)}
        loading={loading}
        iconColor={'#FFFFFF'}
        containerStyle={styles.buttonContainer}
      />
      <Text style={styles.registerText}>
        Don't have an account?
        <TouchableWithoutFeedback onPress={() => navigation.navigate('EstateRegister')}>
          <Text style={styles.registerLink}> Register</Text>
        </TouchableWithoutFeedback>
      </Text>
      <Modal visible={modal} animationType='slide' onRequestClose={() => setOpen(false)} presentationStyle='pageSheet'>
        <SafeAreaView style={styles.modalContainer}> 
          <Container
            text={null} 
            iconColor={'#000000'} 
            iconSize={25} 
            iconName={'close'} 
            style={styles.closeIcon}
            onClick={() => setOpen(false)}
          /> 
          <Text style={styles.text}>Select Estate</Text>
          <ScrollView 
            style={styles.scrollView} 
            contentContainerStyle={styles.scrollContent}
          >
            {matches?.map((option, index) => (
              <TouchableOpacity onPress={() => onSelectOption(estateLogin.estateName, estateLogin.estateId)} style={styles.address} key={index}>
                <Text style={styles.optionName}>{option.estateName}</Text>
                <Text style={styles.optionAddress}>{option.formattedAddress}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
    );
};
  
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  img: {
    width: calculateEm(250),
    height: calculateEm(210),
    marginTop: calculateEm(46),
    alignSelf: 'center'
  },
  image: {
    width: calculateEm(250),
    height: calculateEm(210)
  },
  text: {
    color: '#000000',
    fontSize: calculateFontsize(25),
    fontFamily: 'Bold',
    alignSelf: 'center',
    marginTop: calculateEm(33),
  },
  text2: {
    color: 'grey',
    fontSize: calculateFontsize(13),
    fontFamily: 'SLight',
    alignSelf: 'center',
    marginTop: calculateEm(10),
    marginBottom: calculateEm(32)
  },
  text3: {
    color: '#FFFFFF',
    fontFamily: 'Bold',
  },
  form: {
    width: '100%',
    height: calculateEm(200),
    alignSelf: 'center',
    gap: calculateEm(5),
    alignItems: 'center'
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    height: calculateEm(53),
    color: '#000000',
    paddingLeft: 15,
    fontFamily: 'SLight',
    fontSize: calculateFontsize(14),
  },
  button: {
    width: screenWidth * 0.90,
    height: calculateEm(52),
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#000000'
  },
  buttonContainer: {
    width: '90%',
    marginTop: calculateEm(5),
    alignSelf: 'center',
  },
  registerText: {
    marginTop: calculatePercentageDimension(20, 932),
    fontSize: 13,
    fontFamily: 'SLight',
    color: '#000000',
    alignSelf: 'center'
  },
  registerLink: {
    color: '#000000',
    fontFamily: 'Bold'
  },
  modalContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  closeIcon: {
    width: 68,
    height: 63,
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 5,
    borderWidth: 0
  },
  scrollView: {
    width: '100%'
  },
  scrollContent: {
    paddingBottom: 20
  },
  address: {
    width: '100%',
    height: calculateEm(100),
    justifyContent: 'center',
    gap: calculateEm(10),
    backgroundColor: '#E8E8E8',
    paddingLeft: calculateEm(20),
    marginTop: calculateEm(15)
  },
  optionName: {
    fontFamily: 'Bold',
    fontSize: calculateEm(22)
  },
  optionAddress: {
    fontFamily: 'Light'
  },
  containerStyle: {
    alignSelf: 'flex-start',
}
});
  
  export default EstateLogin;


