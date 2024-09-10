import React from 'react';
import { View, Text } from 'react-native';
import EntryStreets from './entryStreet';

const ResidenceType = ({text1, text2}) => {
    return (
        <View style={{marginTop:  50}}>
            <View style={{marginBottom: 20}}>
                {[1,2,3,4].map((item, index) => (
                    <EntryStreets key={index} type={'Residence type'}/>
                ))}
            </View>
        </View>
    );
};

export default ResidenceType;
