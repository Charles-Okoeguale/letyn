import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container/container';
import { TextInput } from 'react-native-paper';
import NumberGrid from '../components/residenceNumber';

const EnterAccessCode = () => {
    const [otp, setOtp] = useState(Array(4).fill(''));
    const inputRefs = useRef([]);
    return (
        <SafeAreaView style={styles.container}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={30} 
                iconName={'angle-left'} 
                style={{marginLeft: 5, width: 68, height: 63}}
            /> 
            <Text style={styles.text}>Enter access code</Text>
            <View style={styles.otp}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        onChangeText={(value) => handleOnChange(index, value)}
                        value={digit}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        onSubmitEditing={() => {
                            if (index === numInputs - 1) {
                            }
                        }}
                    />
                ))}
            </View>
                <NumberGrid length={10} logic='subtract' gap={50} backgroundColor={'#000000'} borderColor={'#000000'}/>
        </SafeAreaView>
    );
};

export default EnterAccessCode;

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
    otp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    input: {
        borderWidth: 0.3,
        borderColor: 'white',
        borderRadius: 5,
        width: 50,
        height: 45,
        margin: 5,
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: '#1D1C1C'
    },
  });
