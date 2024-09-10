import { StyleSheet, View, Text } from 'react-native';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { Button } from '@rneui/base';

const NumberOfItems = ({ number, add, subtract, placeholder, style }) => {
    return (
      <View style={[styles.body, style]}>
        <View style={styles.main}>
          <View style={styles.inputContainer}>
            <Text style={styles.placeholderText}>{placeholder}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={styles.buttonStyle}
              onPress={subtract}
            >
              <Text style={styles.buttonText}>-</Text>
            </Button>
            <View style={styles.numberContainer}>
              <Text style={styles.numberText}>{number}</Text>
            </View>
            <Button
              buttonStyle={styles.buttonStyle}
              onPress={add}
            >
              <Text style={styles.buttonText}>+</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  };

export default NumberOfItems;

const styles = StyleSheet.create({
    body: {
      width: '90%',
      gap: 1,
      height: calculateEm(70),
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderRadius: calculateEm(10),
    },
    inputContainer: {
      width: '50%',
      borderRadius: 10,
      height: calculateEm(40),
      color: '#000000',
      paddingLeft: 15,
      fontFamily: 'SLight',
      fontSize: calculateFontsize(14),
      justifyContent: 'center',
    },
    placeholderText: {
      color: '#000000',
      fontFamily: 'SBold',
      fontSize: calculateFontsize(14),
    },
    main: {
      width: '99%',
      flexDirection: 'row',
      gap: 0,
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 5,
      justifyContent: 'space-between',
    },
    buttonContainer: {
      width: calculateEm(150),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: calculateEm(5),
    },
    buttonStyle: {
      width: calculateEm(40),
      height: calculateEm(40),
      borderRadius: calculateEm(10),
      backgroundColor: '#FFFFFF',
    },
    buttonText: {
      fontFamily: 'Bold',
      fontSize: calculateFontsize(20),
      color: '#000000',
    },
    numberContainer: {
      width: '30%',
      backgroundColor: '#000000',
      paddingLeft: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      height: calculateEm(40),
    },
    numberText: {
      color: '#FFFFFF',
      fontFamily: 'Bold',
      fontSize: calculateFontsize(20),
    },
  });
