import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export { screenWidth, screenHeight };
import * as SecureStore from 'expo-secure-store';


const designScreenWidth = 390;
const scaleFactor = screenWidth / designScreenWidth;

export const calculateFontsize = (size) => {
  return Math.round(size * scaleFactor);
};

export const calculateEm = (value) => {
  return Math.round(value * scaleFactor);
};

export const calculatePercentageDimension = (value, base) => {
  return `${(value / base) * 100}%`;
};

export function capitalizeFirstLetter(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}


export const getFromSecureStore = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key);

    if (value !== null) {
      return value;
    } else {
      console.warn(`No value found for key: ${key}`);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving value from SecureStore:', error);
    throw new Error('Failed to retrieve value from SecureStore');
  }
};