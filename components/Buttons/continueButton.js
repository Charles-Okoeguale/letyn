import React from 'react';
import { View } from 'react-native';
import { SolidSvg } from '../SVGs/arrow';
import { calculateEm } from '../../utils/helpers';

const ContinueButton = ({ navigation }) => {
  return (
      <SolidSvg
        color={'#FFFFFF'}
        height={calculateEm(50)}
        width={calculateEm(50)}
        handleClick={() => navigation.navigate('Continue')}
      />
  );
};

export default ContinueButton;
