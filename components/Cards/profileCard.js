import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Container from '../Container/container';
import { calculateEm } from '../../utils/helpers';

const ProfileCard = ({name, iconName, handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{
                width: 400, 
                flexDirection: 'row',
                gap: calculateEm(30),
                height: calculateEm(60),
                alignItems: 'center',
                paddingLeft: 5
            }}>
                <Container
                    text={null} 
                    iconColor={'#000000'} 
                    iconSize={20} 
                    iconName={iconName} 
                    style={{
                        backgroundColor: '#FFFFFF',
                    }}
                />
                <Text style={{color: '#000000', fontWeight: 400, fontSize: 15, fontFamily: 'SBold'}}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    
};

export default ProfileCard;
