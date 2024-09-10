import { StyleSheet, View, Image, SafeAreaView, Text} from 'react-native';
import RegisterCards from '../components/registerCards';
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-paper';

const backgroundImage1 = require("../assets/apartments_509865.png")
const backgroundImage2 = require("../assets/home_5509495.png")

const OptionScreen = () => {
    let [fontsLoaded, fontError] = useFonts({
        'space-growtesk' : require("../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf")
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.back}>
                <TextInput.Icon size={30} icon="arrow-left" color={'white'} style={{marginLeft: 30}}/>
            </Text>
            <Text style={styles.register}>Romford 26</Text>
            <View style={styles.cards}>
            <RegisterCards text={'Community'} image={backgroundImage1} width={'70%'} height={'80%'}/>
            <RegisterCards text={'Resident'} image={backgroundImage2} width={'60%'} height={'80%'}/>
            </View>
        </SafeAreaView>
    )
}

export default OptionScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      gap: 40
    },
    back: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        fontSize: 17,
        color: 'white',
        fontFamily: 'alfa-slab-one',
    },
    register: {
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontFamily: 'alfa-slab-one',
    },
    cards: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 80,
        marginTop: 35,
    }
});