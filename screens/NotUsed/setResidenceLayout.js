import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { calculateEm, calculateFontsize, calculatePercentageDimension } from '../../utils/helpers';
import { SolidSvg } from '../../components/SVGs/arrow';

const SetResidenceLayout = ({ navigation }) => {
  const handleEstatePress = () => {
    navigation.navigate('ResidenceType');
  };
  const handleSetResidenceType = () => {
    navigation.navigate('ResidenceType');
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ gap: calculateEm(14), alignItems: 'center', marginTop: calculateEm(100) }}>
        <TouchableOpacity onPress={handleEstatePress} style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Set residences name</Text>
          </View>
          <SolidSvg color={'#000000'} height={20} width={20}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSetResidenceType} style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>Set residence type</Text>
          </View>
          <SolidSvg color={'#000000'} height={calculateEm(20)} width={calculateEm(20)}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SetResidenceLayout;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  text2: {
    fontFamily: 'SBold',
    fontSize: calculateFontsize(16)
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(8),
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
  textContainer: {
    flex: 1,
  },
});