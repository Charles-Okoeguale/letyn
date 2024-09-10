import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SolidSvg } from '../SVGs/arrow';
import { calculateEm } from '../../utils/helpers';

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <SolidSvg
        color={'#000000'} 
        height={calculateEm(50)} 
        width={calculateEm(50)} 
        handleClick={onPress}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10,
  },
});

export default FloatingButton;
