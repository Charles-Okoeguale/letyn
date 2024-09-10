import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { CheckBox } from '@rneui/themed';
import NumberOfItems from './numberOfItems';

const Flat = ({handleOpenModal, index, noofstreets}) => {
    let [fontsLoaded, fontError] = useFonts({
        'Bold': require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'Light': require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.body} key={index}>
                <TextInput
                    style={styles.input}
                    placeholder={'Name of street'} 
                    placeholderTextColor={'#000000'}
                    onChangeText={''}
                    value={''}
                />
                <NumberOfItems
                    placeholder={'Number of residences'} 
                    number={noofstreets} 
                    style={{
                        width: '95%',
                        height: calculateEm(60)
                    }}
                    // fontFamily={'SLight'}
                    // add={() => setNoofstreets(noofstreets + 1)} 
                    // subtract={() => setNoofstreets(noofstreets - 1)}
                />
        </View>
    )
}

export default Flat;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        gap: 0.5,
        height: calculateEm(150),
        // backgroundColor: '#E8E8E8',
        alignItems: 'center',
        borderRadius: calculateEm(10),
        gap: calculateEm(10),
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        marginBottom: calculateEm(40)
        
    },
    input: {
        width: '75%',
        borderRadius: 10,
        height: calculateEm(53),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'SLight',
        fontSize: calculateFontsize(14),
        backgroundColor: '#E8E8E8'
      },
    main: {
        width: '99%',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        backgroundColor: 'blue'
    }
});