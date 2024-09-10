import { StyleSheet, SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import { calculateEm, calculateFontsize, calculatePercentageDimension } from '../utils/helpers';
import Checkbox_Button from '../components/Buttons/checkbox_button';
import FloatingButton from '../components/Buttons/floatingButton'

const SelectEstateLayout = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [layout, setLayout] = useState()

  const handleCheckChange = (index) => {
    setSelectedIndex(index); 
  };

  const types = [
    {name: 'Street', nav: 'SetFlats'},
    {name: 'Numbered Lot', nav: 'SetFlats'},
  ]

  const handlePress = () => {
    navigation.navigate('Upload');
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ gap: calculateEm(14), alignItems: 'center', marginTop: calculateEm(100) }}>
        {types.map((type, index) => (
          <Checkbox_Button
            key={index}
            index={index}
            onPress={() => {
              handleCheckChange(index);
              setLayout(type.name)
            }}
            label={type.name}
            isChecked={selectedIndex === index}
            style={styles.main}
            textStyle={styles.text2}
            onCheckChange={() => handleCheckChange(index)}
          />
        ))}
      </View>
      <FloatingButton onPress={handlePress}/>
    </SafeAreaView>
  );
};

export default SelectEstateLayout;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  text: {
    color: '#000000',
    alignSelf: 'center',
    marginTop: calculateEm(82),
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
  text2: {
    fontFamily: 'Bold',
    fontSize: calculateFontsize(24)
  },
});