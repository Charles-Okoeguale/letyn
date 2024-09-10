import React from 'react';
import { View, Text } from 'react-native';

const StreetCard = ({text1, text2}) => {
    return (
        <View>
            <View style={{width: 440, height: 79, backgroundColor: '#1D1C1C', alignSelf: 'center', gap: 150, flexDirection: 'row'}}>
            <Text style={{color: 'white', fontFamily: 'Bold'}}>Romford</Text>
            <Text style={{color: 'white', fontFamily: 'Bold'}}>Romford</Text>
            </View>
        </View>
    );
};

export default StreetCard;
