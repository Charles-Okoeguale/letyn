import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { TouchableOpacity } from 'react-native';

const ResidenceCard = ({ residenceName, numberOfResidences, navigation }) => {
  const handleButtonClick = () => {
    console.log('card clicked')
    navigation.navigate("SelectResidence")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No of residences</Text>
     <TouchableOpacity onPress={handleButtonClick}>
      <View style={styles.card}>
          <Text style={styles.residenceName}>{residenceName}</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{numberOfResidences}</Text>
          </View>
        </View>
     </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.residenceName}>{residenceName}</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{numberOfResidences}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.residenceName}>{residenceName}</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{numberOfResidences}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingRight: calculateEm(10),
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SBold',
    fontSize: calculateFontsize(14),
    alignSelf: 'flex-end',
    marginTop: calculateEm(33),
    marginBottom: calculateEm(24),
  },
  card: {
    width: '95%',
    height: calculateEm(70),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: calculateEm(10),
    paddingRight: calculateEm(10),
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: calculateEm(10),
    marginBottom: calculateEm(10)
  },
  residenceName: {
    color: '#000000',
    fontFamily: 'SBold',
    fontSize: calculateFontsize(16),
  },
  numberContainer: {
    width: calculateEm(60),
    height: calculateEm(50),
    backgroundColor: '#000000',
    paddingLeft: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: calculateEm(10),
  },
  number: {
    color: '#FFFFFF',
    fontFamily: 'Bold',
    fontSize: calculateFontsize(20),
  },
});

export default ResidenceCard;
