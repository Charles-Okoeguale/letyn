import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { calculateEm, calculateFontsize, calculatePercentageDimension } from '../../utils/helpers';
import React from 'react';
import OptionButton from '../../components/Buttons/optionButton';

const ContinueScreen = ({ navigation }) => {

  const handleEstatePress = () => {
    navigation.navigate('EstateRegister');
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>Start Your Experience</Text>
      <View style={styles.view}>
        <OptionButton 
          onPress={handleEstatePress} 
          text={'Estate'} 
          svgColor={'#000000'} 
          svgHeight={calculateEm(20)} 
          svgWidth={calculateEm(20)}
          style={styles.main}
          textStyle={styles.textStyle}
        />
        <OptionButton 
          // onPress={handleEstatePress} 
          text={'Resident'} 
          svgColor={'#000000'}  
          svgHeight={calculateEm(20)} 
          svgWidth={calculateEm(20)}
          style={styles.main}
          textStyle={styles.textStyle}
        />

      </View>
    </SafeAreaView>
  );
};

export default ContinueScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  textStyle: {
    color: '#000000',
    fontFamily: 'Bold',
    fontSize: calculateFontsize(24)
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(50),
    marginBottom: calculateEm(73),
    fontFamily: 'Bold',
    fontSize: calculateFontsize(20)
  },
  main: {
    width: calculatePercentageDimension(382, 430),
    height: calculateEm(100),
    backgroundColor: '#FFFFFF',
    borderRadius: calculateEm(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: calculateEm(20)
  },
  view: {
    gap: calculateEm(14), 
    alignItems: 'center'
  }
});