import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Container from '../../components/Container/container';
import NumberGrid from '../../components/numberGrid';

const SelectResidenceNumber = ({text1, text2}) => {
    return (
        <SafeAreaView style={styles.container}>
        <Container
            text={null} 
            iconColor={'#FFFFFF'} 
            iconSize={30} 
            iconName={'angle-left'} 
            style={{marginLeft: 5, width: 68, height: 63}}
        /> 
        <Text style={styles.text}>Romford street</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
        <NumberGrid length={30}/>
        </View>
        </SafeAreaView>
    );
};

export default SelectResidenceNumber;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    text: {
        color: 'white', 
        fontSize: 25, 
        alignSelf: 'center',
        fontFamily: 'Bold',
        marginTop: 40
    }
  });
