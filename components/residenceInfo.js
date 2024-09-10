import { StyleSheet, View, Text} from 'react-native';
import Card from './Cards/card';
import SwitchCard from './Cards/switchCard';
import MovementLog from './Cards/movementLog';
import { useFonts } from 'expo-font';

const names = ['Charles', 'John', 'Alice', 'Bob', 'Emily', 'David', 'Sarah', 'Michael'];
const items = ['Chairs', 'Table', 'Bed', 'Gas', 'Curtains', 'TV', 'TV Stand', 'Wine Bar'];

const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
};

const rows = chunkArray(names, 3);
const rows2 = chunkArray(items, 3)

const ResidenceInfo = () => {
    let [fontsLoaded, fontError] = useFonts({
        'SpaceGrotesk-Bold' : require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'SpaceGrotesk-Light' : require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.houseName}>
                <Text 
                    style={{
                        color: 'white', 
                        fontWeight: 'bold',
                        fontSize: 20,
                        fontFamily: 'SpaceGrotesk-Bold'
                    }}>
                    26 Romford Street
                </Text>
                <Text style={{color: 'white', fontSize: 15, fontFamily: 'SpaceGrotesk-Light' }}>
                   09134954970
                </Text>
            </View>

            <Card title="Residents" rows={rows}/>
            <Card title="Visitors" rows={rows}/>
            <SwitchCard title="Estate Dues" rows={rows}/>
            <MovementLog title="Movement Log" rows={rows2}/>
        </View>
    )
}

export default ResidenceInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: '15%',
        borderWidth: 0.1,
        alignItems: 'center'
    },
    houseName: {
        width: '100%',
        height: 85,
        gap: 10,
        alignItems: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#1D1C1C',
        height: '40%',
        padding: 10,
        borderRadius: 10,
        gap: 20
    }
});