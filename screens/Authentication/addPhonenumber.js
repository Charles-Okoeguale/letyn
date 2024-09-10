import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Text } from '@rneui/themed';
import { calculateEm, calculateFontsize, calculatePercentageDimension} from '../../utils/helpers';
import { useForm } from '../../Context/FormContext';
import CustomButton from '../../components/button';
import { postRequest, sendRequest } from '../../utils/api_calls';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const AddPhoneNumberScreen = ({ navigation }) => {
    const { estateRegister, setEstateRegister, loading, setLoading } = useForm();

    const handleSendRequest = async () => {
        console.log(estateRegister)
        postRequest({
            data: estateRegister,
            endpoint: 'http://localhost:3000/estates/issueOtp',
            onSuccess: (response) => {
                const userId = response.data.estateId;
                SecureStore.setItemAsync('letyn_user_id', userId);
                navigation.navigate("Verification");
            },
            onFailure: (error) => {
                console.error('Error sending OTP:', error);
            },
            setIsLoading: setLoading,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Enter your phone number
            </Text>
            <TextInput 
                style={styles.input}
                placeholder={'Enter phone number'} 
                placeholderTextColor={'#9EA0A4'}
                onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, '');
                    setEstateRegister({...estateRegister, phoneNumber: numericValue});
                }}
                value={estateRegister.phoneNumber}
                keyboardType="phone-pad"
                maxLength={15}
            />
            <CustomButton
                text={'Continue'}
                fontFamily={'Bold'}
                fontSize={calculateFontsize(14)}
                buttonStyle={styles.button}
                onClick={handleSendRequest}
                textStyle={styles.text2}
                iconSize={20}
                loading={loading}
                iconColor={'#FFFFFF'}
                containerStyle={styles.buttonContainer}
            />
        </SafeAreaView>
    );
}

export default AddPhoneNumberScreen;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        gap: calculatePercentageDimension(30, 932),
        alignItems: 'center',
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: calculateFontsize(20),
        fontFamily: 'Bold',
        textAlign: 'center',
        marginBottom: calculateEm(63),
        marginTop: calculateEm(60)
    },
    text2: {
        color: '#FFFFFF',
        fontFamily: 'Bold',
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
    input: {
        width: calculatePercentageDimension(358, 390),
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        height: calculateEm(53),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'Light',
        fontSize: calculateFontsize(14),
        marginBottom: calculateEm(16)
    },
});