import { StyleSheet, SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import { calculateEm, calculateFontsize, calculatePercentageDimension } from '../../utils/helpers';
import Checkbox_Button from '../../components/Buttons/checkbox_button';
import FloatingButton from '../../components/Buttons/floatingButton';

const SetResidenceType = ({ navigation }) => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleEstatePress = () => {
    navigation.navigate('ResidenceName');
  };

  const handleSelectFlats = () => {
    navigation.navigate('SetFlats');
  }

  const handleCheckChange = (index) => {
    setSelectedIndices(prevSelectedIndices => {
      if (prevSelectedIndices.includes(index)) {
        return prevSelectedIndices.filter(i => i !== index);
      } else {
        return [...prevSelectedIndices, index]; 
      }
    });
  };

  const handleSelectType = () => {

  }


  const types = [
    {name: 'Flat', nav: 'SetFlats'},
    {name: 'Bungalow', nav: 'SetFlats'},
    {name: 'Duplex', nav: 'SetFlats'},
    {name: 'Terrace', nav: 'SetFla'}
  ]

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ gap: calculateEm(14), alignItems: 'center', marginTop: calculateEm(100) }}>
        {types.map((type, index) => (
          <Checkbox_Button
            key={index}
            index={index}
            onPress={() => handleCheckChange(index)}
            label={type.name}
            isChecked={selectedIndices.includes(index)}
            style={styles.main}
            textStyle={styles.text2}
            onCheckChange={handleCheckChange}
        />
        ))}  
      </View>
      <FloatingButton onPress={handleSelectType}/>
    </SafeAreaView>
  );
};

export default SetResidenceType;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  text2: {
    fontFamily: 'SBold',
    fontSize: calculateFontsize(16)
  },
  main: {
    width: calculatePercentageDimension(382, 430),
    height: calculateEm(70),
    backgroundColor: '#FFFFFF',
    borderRadius: calculateEm(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: calculateEm(20)
  },

  textStyle: {
    color: '#000000',
    fontFamily: 'Bold',
    fontSize: calculateFontsize(24)
  },
  textContainer: {
    flex: 1,
  },
});