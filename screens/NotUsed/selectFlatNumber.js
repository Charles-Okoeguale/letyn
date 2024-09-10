import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Container from '../../components/Container/container';
import NumberGrid from '../components/residenceNumber';

const { width, height } = Dimensions.get('window');

const SelectFlatNumber = ({text1, text2}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={30} 
                iconName={'angle-left'} 
                style={{marginLeft: 5, width: 68, height: 63}}
            /> 
            <Text style={styles.text}>26 Romford street</Text>
            <Text style={[styles.text, {fontFamily: 'Light', fontSize: 18}]}>Choose flat number</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            <NumberGrid length={10}/>
            </View>
        </SafeAreaView>
    );
};

export default SelectFlatNumber;

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
    },
    containerStyle: {
        borderRadius: 10,
        height: 60,
        backgroundColor: '#1D1C1C',
        alignSelf: 'center',
        marginTop: 50
    },

    inputContainerStyle: {
        borderBottomColor: null,
        borderBottomWidth: 0,
        paddingTop: 5,
        fontSize: 14,
    },
    inputStyle: {
        color: 'white',
        fontFamily: 'Light',
        paddingLeft: 10
    },
  });
