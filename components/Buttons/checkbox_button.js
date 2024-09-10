import { CheckBox } from '@rneui/themed';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox_Button = ({ onPress, label, isChecked, onCheckChange, style, textStyle, index }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} key={index}>
      <View style={styles.textContainer}>
        <Text style={textStyle}>{label}</Text>
      </View>
      <CheckBox
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        checkedColor='#000000'
        uncheckedColor='#000000'
        checked={isChecked}
        onPress={onCheckChange}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  checkboxContainer: {
    backgroundColor: '#FFFFFF',
  },
});

export default Checkbox_Button;
