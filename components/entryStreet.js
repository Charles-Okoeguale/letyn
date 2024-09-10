import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Textfield from './textfield';
import { useFonts } from 'expo-font';
import { CheckBox } from '@rneui/themed';
import { useState } from 'react';


const { width, height } = Dimensions.get('window');

const EntryStreets = ({ placeholder, type }) => {
    let [fontsLoaded, fontError] = useFonts({
        'Bold': require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'Light': require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    const [checked, setChecked] = useState(true);
    const [selectedIndex, setIndex] = useState(0);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <View style={styles.body}>
            <View style={[styles.main, { height: height * 0.1 }]}>
                {type === 'Residence type' && (
                    <>
                        <Text style={{color: 'white', fontFamily: 'Bold', fontSize: 20}}>Bungalow</Text>
                        <CheckBox
                            checked={selectedIndex === 1}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            containerStyle={{
                                backgroundColor: '#000000',
                            }}
                            checkedColor='#FFFFFF'
                            uncheckedColor='#FFFFFF'
                        />
                    </>
                )}
                {type === 'Add phone number' && (
                    <>
                        <Textfield
                            containerStyle={[styles.containerStyle, { width: width * 0.75 }]}
                            placeholder={placeholder}
                            textColor={'#FFFFFF'}
                            placeholderTextColor={'#FFFFFF'}
                            inputStyle={styles.inputStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            secureTextEntry={false}
                            iconColor={'#ACACAC'}
                            iconSize={20}
                        />
                        <Textfield
                            containerStyle={styles.containerStyle2}
                            textColor={'#FFFFFF'}
                            placeholderTextColor={'#FFFFFF'}
                            inputStyle={styles.inputStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            secureTextEntry={false}
                        />
                    </>
                )}
            </View>
        </View>
    )
}

export default EntryStreets;

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
        backgroundColor: '#1D1C1C',
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
    button: {
        alignItems: 'center'
    },
    main: {
        width: '99%',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 5
    }
});
