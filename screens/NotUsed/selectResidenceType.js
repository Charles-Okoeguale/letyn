import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Container from '../../components/Container/container';
import NumberGrid from '../components/residenceNumber';
import Textfield from '../components/textfield';
import NumberOfItems from '../../components/numberOfItems';
import CustomButton from '../../components/button';

const { width, height } = Dimensions.get('window');

const SelectResidenceType = ({text1, text2}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={30} 
                iconName={'angle-left'} 
                style={{marginLeft: 5, width: 68, height: 63}}
            /> 
            <Text style={styles.text}>Set number of lots</Text>
            <NumberOfItems placeholder={'Number of lots'} type={'Set'} style={{marginTop: 50}}/>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            <NumberGrid length={10}/>
            </View>
            <CustomButton text={'Save'} buttonColor={'#FFFFFF'} width={400} height={60} style={{marginTop: 300, alignSelf: 'center'}}/>
        </SafeAreaView>
    );
};

export default SelectResidenceType;

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
