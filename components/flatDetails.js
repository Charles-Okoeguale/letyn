import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Textfield from './textfield';

const FlatDetails = () => {
    return (
        <View style={
            {
                width: 420, 
                height: 79, 
                borderRadius: 10, 
                backgroundColor: '#1D1C1C', 
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 10,
                marginTop: 20
            }}
        >
            <Text style={styles.text}>No of apartments</Text>
            <Textfield
                containerStyle={styles.containerStyle2}
                placeholder={'2'}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
            />
        </View>
    );
};

export default FlatDetails;

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 10,
        height: 50,
        backgroundColor: '#1D1C1C',
        alignSelf: 'center',
    },

    containerStyle2: {
        width: 60,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#000000',
        alignSelf: 'center',
        borderColor: '#292525',
        borderWidth: 1,
    },
    body: {
        width: '99%',
        gap: 1,
        height: 70,
        backgroundColor: '#000000',
        borderColor: '#292525',
        borderWidth: 1,
        justifyContent: 'center'
    },
    inputContainerStyle: {
        borderBottomColor: null,
        borderBottomWidth: 0,
        paddingTop: 2,
        fontSize: 14,
    },
    inputStyle: {
        color: 'white',
        fontFamily: 'Light',
        textAlign: 'center'
    },
    checkbox: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000',
        gap: 10
    },
    button: {
        alignItems: 'center',
    },
    main: {
        width: '99%',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5
    },
    text: {
        color: 'white', 
        fontSize: 15, 
        fontFamily: 'Bold',
        alignSelf: 'center'
    },
});