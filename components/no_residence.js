import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './button';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { Image } from 'react-native';

const NoResidencesComponent = ({ navigation }) => {
  return (
    <View style={styles.residenceContainer}>
      <Image
        source={require('../assets/Register.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.noResidenceText}>You have no registered residence</Text>
      <CustomButton
          text={'Add residence(s)'}
          fontFamily={'Bold'}
          fontSize={calculateFontsize(14)}
          buttonStyle={styles.button}
          onClick={() => navigation.navigate("LayoutType")}
          textStyle={styles.text3}
          iconSize={calculateEm(20)}
          // loading={loading}
          iconColor={'#FFFFFF'}
          containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  residenceContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: calculateEm(100)
  },
  image: {
    width: calculateEm(200),
    height: calculateEm(150),
  },
  residenceText: {
    fontSize: calculateFontsize(40),
    fontFamily: 'SLight',
  },
  noResidenceText: {
    fontSize: calculateFontsize(12),
    fontFamily: 'SLight',
  },
  buttonContainer: {
    width: '60%',
    marginTop: calculateEm(5),
    position: 'absolute', 
    bottom: 50, 
},
  button: {
    height: calculateEm(52),
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },

  text3: {
    color: '#000000',
    fontFamily: 'Bold',
},
});

export default NoResidencesComponent;
