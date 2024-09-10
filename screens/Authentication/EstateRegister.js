import { StyleSheet, Text, SafeAreaView,  TouchableWithoutFeedback, View, Image, Alert } from 'react-native';
import { calculateEm, calculateFontsize, calculatePercentageDimension } from '../../utils/helpers';
import { useForm } from '../../Context/FormContext';
import { useEffect, useState } from 'react';
import CustomButton from '../../components/button';
import React from 'react';


const EstateRegister = ({ navigation }) => {
  const { estateRegister, setEstateRegister, setLoading, loading } = useForm();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure you want to leave?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => {} },
          { text: 'Leave', style: 'destructive', onPress: () => {
              setEstateRegister({
                estateName: '',
                country: '',
                state: '',
                city: '',
              });
              navigation.dispatch(e.data.action);
            }},
        ]
      );
    });
    return unsubscribe;
  }, [navigation]);

  const checkEstateCertificate = async () => {
    await setEstateRegister({
      ...estateRegister, 
      estateName: 'Suncity estate',
      country: 'Nigeria',
      state: 'Federal Capital Territory',
      city: 'Abuja'
    })
    navigation.navigate('MainOffice')
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}>Create estate account</Text>
    <Text style={styles.text3}>Upload estate certificate to verify estate identity</Text>
    <View style={styles.img}>
      <Image
        source={require('../../assets/Register.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
      <CustomButton
          text={'Upload estate certificate'}
          fontFamily={'Bold'}
          fontSize={calculateFontsize(14)}
          buttonStyle={styles.button}
          onClick={checkEstateCertificate}
          textStyle={styles.text2}
          iconSize={20}
          loading={loading}
          iconColor={'#FFFFFF'}
          containerStyle={styles.buttonContainer}
      />
      <Text style={styles.loginText}>
        Already have an account?
        <TouchableWithoutFeedback onPress={() => navigation.navigate('EstateLogin')}>
          <Text style={styles.loginLink}>{' '} Login</Text>
        </TouchableWithoutFeedback>
      </Text>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: calculateEm(200),
    height: calculateEm(150),
  },
  form: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    gap: calculateEm(10),
    marginTop: calculateEm(35),
  },
  input: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    height: calculateEm(53),
    color: '#000000',
    paddingLeft: 15,
    fontFamily: 'SLight',
    fontSize: calculateFontsize(14),
  },
  buttonContainer: {
    width: '55%',
    marginTop: calculateEm(20),
  },
  button: {
    height: calculateEm(52),
    borderRadius: 15,
    backgroundColor: '#000000',
  },
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: calculateEm(200),
    height: calculateEm(150),
  },
  titleText: {
    fontFamily: 'Bold',
    fontSize: calculateFontsize(24),
    marginBottom: calculateEm(5),
  },
  subtitleText: {
    fontFamily: 'SLight',
    fontSize: calculateFontsize(16),
    color: 'grey',
  },
  loginText: {
    marginTop: calculatePercentageDimension(20, 932),
    fontSize: 13,
    fontFamily: 'SLight',
  },
  loginLink: {
    color: '#000000',
    fontFamily: 'Bold',
  },
  text2: {
    color: '#FFFFFF',
    fontFamily: 'Bold'
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(50),
    fontFamily: 'Bold',
    fontSize: calculateFontsize(20)
  },
  text3: {
    color: '#000000',
    fontSize: 13,
    marginBottom: calculateEm(73),
    fontFamily: 'SLight',
    alignSelf: 'center',
},
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    height: calculateEm(53),
    color: '#000000',
    paddingLeft: 15,
    fontFamily: 'SLight',
    fontSize: calculateFontsize(14),
    paddingRight: 30,
  },
  inputAndroid: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    height: calculateEm(53),
    color: '#000000',
    paddingLeft: 15,
    fontFamily: 'SLight',
    fontSize: calculateFontsize(14),
    paddingRight: 30, 
  },
});

export default EstateRegister;