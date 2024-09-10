import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import React from 'react';
import { useForm } from '../Context/FormContext';
import CustomButton from '../components/button';
import { calculateEm, calculateFontsize } from '../utils/helpers';


const UploadScreen = ({ navigation }) => {
  const { loading } = useForm();

  const checkEstateCertificate = async () => {
   console.log('uploading spreadsheet')
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
    <Text style={styles.text}>Add residence(s)</Text>
    <Text style={styles.text3}>Upload estate layout spreadsheet</Text>
    <View style={styles.img}>
      <Image
        source={require('../assets/Register.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
      <CustomButton
          text={'Upload spreadsheet'}
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
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: calculateEm(200),
    height: calculateEm(150),
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
  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(50),
    fontFamily: 'Bold',
    fontSize: calculateFontsize(20)
  },
  text2: {
    color: '#FFFFFF',
    fontFamily: 'Bold',
  },
  text3: {
    color: '#000000',
    fontSize: 13,
    marginBottom: calculateEm(73),
    fontFamily: 'SLight',
    alignSelf: 'center',
},
});
export default UploadScreen;
