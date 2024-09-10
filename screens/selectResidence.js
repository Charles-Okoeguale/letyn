import { StyleSheet, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import ResidenceCard from '../components/streetLayout';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import NumberGrid from '../components/numberGrid';

const SelectResidenceScreen = ({ navigation }) => {
//   const handleEstatePress = () => {
//     navigation.navigate('EstateRegister');
//   };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>Romford Street</Text>
        <View style={{width: '50%', flexDirection: 'row', gap: 4, alignItems: 'center', paddingLeft: calculateEm(10)}}>
            <View style={{width: 20, height: 20, borderRadius: 3, backgroundColor: 'lightgreen'}}></View>
            <Text style={{fontFamily: 'SBold'}}>Selected</Text>
        </View>
      <View style={{flex: 1}}>
      <NumberGrid length={30}/>
      </View>
    </SafeAreaView>
  );
};

export default SelectResidenceScreen ;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(40),
    marginBottom: calculateEm(40),
    fontFamily: 'Bold',
    fontSize: calculateFontsize(20)
  },
});