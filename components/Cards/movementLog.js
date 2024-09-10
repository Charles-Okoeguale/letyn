import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

const MovementLog = ({ title, rows }) => {
    let [fontsLoaded, fontError] = useFonts({
        'SpaceGrotesk-Bold' : require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'SpaceGrotesk-Light' : require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: '100%', marginTop: 20 }}>
                {rows.map((row, index) => (
                    <View key={index} style={styles.row}>
                        {row.map((name, i) => (
                            <Text key={i} style={styles.name}>{name}</Text>
                        ))}
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
        marginBottom: 20,
        borderColor: '#D4C3C3',
        borderWidth: 0.3,
        width: '95%'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'SpaceGrotesk-Bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    name: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        width: '20%',
        fontFamily: 'SpaceGrotesk-Light'
    },
};

export default MovementLog;
