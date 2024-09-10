import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { useFonts } from 'expo-font';

const SwitchCard = ({ title, rows }) => {
let [fontsLoaded, fontError] = useFonts({
    'SpaceGrotesk-Bold' : require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    'SpaceGrotesk-Light' : require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
});

if (!fontsLoaded && !fontError) {
    return null;
}
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: '100%', marginTop: 20, gap: 12 }}>
                {rows.map((row, index) => (
                    <View key={index} style={styles.list}>
                        <Text style={{
                                color: 'white', 
                                fontWeight: 800, 
                                fontSize: 17,
                                fontFamily: 'SpaceGrotesk-Light'
                        }}>Service Charge</Text>
                        <Switch
                            trackColor={{false: '#767577', true: '90EE90'}}
                            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = {
    card: {
        backgroundColor: '#1D1C1C',
        padding: 20,
        borderRadius: 10,
        borderColor: '#D4C3C3',
        borderWidth: 0.3,
        marginBottom: 20,
        width: '95%',
    },
    title: {
        color: 'darkgrey',
        fontSize: 25,
        color: '#FFFFFF',
        fontFamily: 'SpaceGrotesk-Bold',
        marginBottom: 10,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};

export default SwitchCard;
