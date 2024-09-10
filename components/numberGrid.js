import React from 'react';
import { View, ScrollView } from 'react-native';
import Container from './Container/container';
import CustomButton from './button';
import { calculateEm } from '../utils/helpers';


const NumberGrid = ({length}) => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, width: '90%', alignSelf:'center' }}>
            <ScrollView vertical>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, alignItems: 'center',}}>
                    {Array.from({ length: length }).map((item, index) => (
                        <Container
                            key={index}
                            text={index + 1} 
                            iconColor={'#FFFFFF'} 
                            fontSize={18}
                            style={{ marginLeft: 5, width: 50, height: 50, backgroundColor: '#E8E8E8'}}
                        /> 
                    ))}
                </View>
                <CustomButton 
                    text={'Update'} 
                    fontFamily={'Bold'} 
                    textColor={'#FFFFFF'}  
                    style={{width: '90%', height: calculateEm(50), backgroundColor: '#000000', borderRadius: calculateEm(10)}}
                />
            </ScrollView>
        </View>
    );
};

export default NumberGrid;
