import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Container from '../../components/Container/container';
import NumberGrid from '../components/residenceNumber';
import FlatDetails from '../../components/flatDetails';
import CustomButton from '../../components/button';

const FlatEdit = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={30} 
                iconName={'angle-left'} 
                style={{marginLeft: 5, width: 68, height: 63}}
            /> 
            <Text style={styles.text}>Flats</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            <NumberGrid length={10}/>
            <View style={{marginBottom: 200}}>
            <Text style={[styles.text, {marginTop: 70}]}>House 2</Text>
            <FlatDetails/>
            </View>
            <CustomButton text={'Next'} textColor={'#000000'} buttonColor={'#FFFFFF'} width={388} height={60}/>
            </View>
        </SafeAreaView>
    );
};

export default FlatEdit;

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
