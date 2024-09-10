import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SolidSvg } from '../SVGs/arrow';

const OptionButton = ({ onPress, text, svgColor, svgHeight, svgWidth, style, textStyle , icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.textContainer}>
        <Text style={textStyle}>{text}</Text>
      </View>
      {icon && <SolidSvg color={svgColor} height={svgHeight} width={svgWidth} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF', 
    borderRadius: 5, 
  },
  textContainer: {
    marginRight: 10,
  },
});

export default OptionButton;
