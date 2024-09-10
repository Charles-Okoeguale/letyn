import React from 'react';
import { View, Image, Text } from 'react-native';
import { calculateEm } from '../../utils/helpers';

const ImageWithTwoText = ({ imageUrl, text1, text2 }) => {
    return (
        <View style={{
            width: '90%',
            backgroundColor: '#E8E8E8',
            height: calculateEm(200),
            borderRadius: calculateEm(20),
            marginBottom: calculateEm(30),
            marginTop: calculateEm(60),
            alignItems: 'center',
        }}>
            <Image
                source={{ uri: imageUrl }}
                style={{ width: '100%', height: '70%', borderRadius: 20 }}
                resizeMode="cover"
            />
            <Text style={{ color: '#000000', fontSize: 18, marginTop: 10, fontFamily: 'Bold' }}>{text1}</Text>
            <Text style={{ color: '#000000', fontSize: 14, marginTop: 5, fontFamily: 'SLight' }}>{text2}</Text>
        </View>
    );
};

export default ImageWithTwoText;
