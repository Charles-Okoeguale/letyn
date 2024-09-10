import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Text } from '@rneui/themed';
import { calculateEm, calculateFontsize, calculatePercentageDimension} from '../../utils/helpers';
import { useForm } from '../../Context/FormContext';
import CustomButton from '../../components/button';
import { fetchEstates } from '../../utils/api_calls';
import CustomModal from '../../components/custom_modal';
import EstateSelectionModal from '../../components/estate_selection';
import { useState } from 'react';

const MainOfficeScreen = ({ navigation }) => {
    const { estateRegister, setEstateRegister, loading} = useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const [estates, setEstates] = useState()

    const handleSendRequest = async () => {
        try {
            await fetchEstates(estateRegister, setEstates, setModalVisible)
            setModalVisible(true)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Enter your head office address
            </Text>
            <TextInput 
                style={styles.input}
                placeholder={'26 Dubai street'} 
                placeholderTextColor={'#9EA0A4'}
                onChangeText={(text) => {
                    setEstateRegister({...estateRegister, headOfficeAddress: text});
                }}
                value={estateRegister.headOfficeAddress}
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
            <CustomModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
                childComponent={EstateSelectionModal}
                childComponentProps={{
                    setModal: setModalVisible,
                    estates: estates,
                    navigation: navigation
                }}
            />
        </SafeAreaView>
    );
}

export default MainOfficeScreen;
 
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