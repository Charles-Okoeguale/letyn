import React from 'react';
import { View, ScrollView } from 'react-native';
import Container from './Container/container';


const ResidenceType = ({length}) => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            <ScrollView vertical>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                    {/* {Array.from({ length: length }).map((item, index) => (
                        
                    ))} */}
                </View>
            </ScrollView>
        </View>
    );
};

export default ResidenceType;
