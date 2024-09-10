import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Text, SafeAreaView } from 'react-native';
import { calculateEm, calculateFontsize, getFromSecureStore } from '../../utils/helpers';
import { useForm } from '../../Context/FormContext';
import CustomButton from '../../components/button';
import axios from 'axios';
import { postRequest } from '../../utils/api_calls';

const VerificationScreen = ({ navigation }) => {
    const { estateRegister, setEstateRegister, loading, setLoading } = useForm();
    const inputRefs = useRef([]);
    const [resendDisabled, setResendDisabled] = useState(false);

    const handleOnChange = (index, value) => {
        const newOtp = [...estateRegister.otp];
        newOtp[index] = value;
      
        setEstateRegister(prevState => ({
          ...prevState,
          otp: newOtp
        }));
      
        if (value && index < newOtp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
    };

    const handleVerify = async () => {
        const id = await getFromSecureStore('letyn_user_id')
        postRequest({
            data: { otp: estateRegister.otp, estateId: id },
            endpoint: 'http://localhost:3000/estates/verifyOtp',
            onSuccess: (response) => {
                const message = response.data.message;
                navigation.navigate("Password");
            },
            onFailure: (error) => {
                console.error('Error verifying OTP:', error);
            },
            type: estateRegister.otp,
            setIsLoading: setLoading,
        });
    };

    const handleResendOtp = async () => {
        try {
            await axios.get('http://localhost:3000/estates/issueOtp');
            console.log('OTP resent successfully');
            setResendDisabled(true);
            setTimeout(() => setResendDisabled(false), 60000); 
        } catch (error) {
            console.error('Error resending OTP:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>Enter the OTP sent to your phone number</Text>
            <View style={styles.otp}>
                {[0, 1, 2, 3].map((index) => (
                    <TextInput
                        key={index}
                        ref={ref => inputRefs.current[index] = ref}
                        style={styles.input}
                        value={estateRegister.otp[index]}
                        onChangeText={value => handleOnChange(index, value)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>
            <CustomButton
                text={'Verify'}
                fontFamily={'Bold'}
                fontSize={calculateFontsize(14)}
                buttonStyle={styles.button}
                onClick={handleVerify}
                textStyle={styles.text2}
                iconSize={calculateEm(20)}
                loading={loading}
                iconColor={'#FFFFFF'}
                containerStyle={styles.buttonContainer}
            />
            <Text 
                style={[styles.resendText, resendDisabled && styles.resendDisabled]}
                onPress={resendDisabled ? null : handleResendOtp}
            >
                Resend OTP
            </Text>
        </SafeAreaView>
    );
}

export default VerificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 24,
        fontFamily: 'Bold',
        marginBottom: calculateEm(10),
        marginTop: calculateEm(50)
    },
    subtitle: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'SLight',
        marginBottom: calculateEm(30),
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: calculateEm(30),
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
        backgroundColor: '#F7F7F7',
        color: '#000000'
    },
    buttonContainer: {
        width: '90%',
        marginTop: calculateEm(5),
    },
      button: {
        height: calculateEm(52),
        borderRadius: 15,
        backgroundColor: '#000000',
      },
    resendText: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Bold',
    },
    resendDisabled: {
        opacity: 0.5,
    },
    text2: {
        color: '#FFFFFF',
        fontFamily: 'Bold',
    },
});