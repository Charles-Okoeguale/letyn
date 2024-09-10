import { StyleSheet, SafeAreaView, Alert, TextInput, Image } from 'react-native';
import { Text } from '@rneui/themed';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import { useState } from 'react';
import { useForm } from '../../Context/FormContext';
import CustomButton from '../../components/button';
import { View } from 'react-native';
import { addEstatePassword } from '../../utils/api_calls';
import StatusItem from '../../components/status_item';
import { validatePassword } from '../../utils/handle_form';

const Password = () => {
    const { estateRegister, setEstateRegister, setToken, loading, checked, setChecked} = useForm();
    const [confirm, setConfirm] = useState('')

    const handleSetpassword = () => {
        const { password } = estateRegister;
        // const validationResult = validatePassword(password);
        // if (!validationResult.valid) {
        //     alert('Invalid information', validationResult.message);
        //     return;
        // }
        if (password !== confirm) {
            alert('Passwords do not match');
            return;
        }
        addEstatePassword({
            password,
            setToken,
        });
    }

    const handleCheckbox = () => {
        setChecked(prev => !prev)
    }
  

    return (
        <SafeAreaView style={styles.container}>
             <Image
                source={require('../../assets/password-internet-data-base-icon-3d-rendering-png 1.png')}
                resizeMode="contain"
                style={{ width: calculateEm(250), height: calculateEm(210), marginTop: calculateEm(50) }}
            />
            <Text style={styles.text}>Create Password</Text>
            <Text style={styles.text2}>Create a new strong password</Text>
            <View style={styles.form}>
            <TextInput 
                style={styles.input}
                secureTextEntry={checked ? false : true}
                placeholder={'Create password'} 
                placeholderTextColor={'#9EA0A4'}
                onChangeText={(text) => setEstateRegister({ ...estateRegister, password: text })}
                value={estateRegister.password}
                maxLength={15}
            />
            <TextInput 
                style={styles.input}
                secureTextEntry={checked ? false : true}
                placeholder={'Confirm password'} 
                placeholderTextColor={'#9EA0A4'}
                onChangeText={(text) => setConfirm(text)}
                value={confirm}
                maxLength={15}
            />
            </View>
            <StatusItem 
                text={'Show password'} 
                indicatorColor={'#FFFFFF'} 
                containerStyle={styles.containerStyle}
                handleCheckbox={handleCheckbox}
                checked={checked}
            />
            <CustomButton
                text={'Continue'}
                fontFamily={'Bold'}
                fontSize={calculateFontsize(14)}
                buttonStyle={styles.button}
                onClick={handleSetpassword}
                textStyle={styles.text3}
                iconSize={calculateEm(20)}
                loading={loading}
                iconColor={'#FFFFFF'}
                containerStyle={styles.buttonContainer}
            />
        </SafeAreaView>
    )
}

export default Password;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'SLight'
    },
    containerStyle: {
        alignSelf: 'flex-start',
        marginTop: calculateEm(10)
    },
    input: {
        width: '95%',
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        height: calculateEm(53),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'SLight',
        fontSize: calculateFontsize(14),
    },
    
    text: {
        color: '#000000',
        fontSize: 25,
        fontFamily: 'Bold',
        alignSelf: 'center',
    },

    text2: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'SLight',
        alignSelf: 'center',
        marginTop: 5
    },

    text3: {
        color: '#FFFFFF',
        fontFamily: 'Bold',
    },

    form: {
        width: '95%',
        marginTop: calculateEm(32),
        alignSelf: 'center',
        alignItems: 'center',
        gap: calculateEm(16)
    },

    buttonContainer: {
        width: '90%',
        marginTop: calculateEm(5),
        position: 'absolute', 
        bottom: 50, 
    },
      button: {
        height: calculateEm(52),
        borderRadius: 15,
        backgroundColor: '#000000',
      },
});