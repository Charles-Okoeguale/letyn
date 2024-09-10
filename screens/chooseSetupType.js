import { StyleSheet, SafeAreaView, View  } from 'react-native';
import React from 'react';
import { calculateEm, calculateFontsize, calculatePercentageDimension } from '../utils/helpers';
import OptionButton from '../components/Buttons/optionButton';

const ChooseSetupTypeScreen = ({ navigation }) => {
  const handleEstatePress = () => {
    navigation.navigate('LayoutType');
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container2}>
        <OptionButton
            onPress={handleEstatePress} 
            text={'Set manually'} 
            svgColor={'#000000'} 
            svgHeight={calculateEm(20)} 
            svgWidth={calculateEm(20)}
            style={styles.main}
            textStyle={styles.textStyle}
        />
        <OptionButton
            text={'Upload document'} 
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

export default ChooseSetupTypeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container2: {
    gap: calculateEm(14), 
    alignItems: 'center',
    marginTop: calculateEm(100)
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
  text2: {
    fontFamily: 'Bold',
    fontSize: calculateFontsize(24)
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(82),
    marginBottom: calculateEm(73),
    fontFamily: 'Bold',
    fontSize: calculateFontsize(20)
  },
  textStyle: {
    color: '#000000',
    fontFamily: 'Bold',
    fontSize: calculateFontsize(24)
  },
  main: {
    width: calculatePercentageDimension(382, 430),
    height: calculateEm(100),
    backgroundColor: '#FFFFFF',
    borderRadius: calculateEm(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: calculateEm(20)
  },
  textContainer: {
    flex: 1,
  },
});