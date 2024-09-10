import React from 'react';
import { View, Text } from 'react-native';
import EntryStreets from './entryStreet';

const TableHead = ({text1, text2}) => {
    return (
            <View style={{flexDirection: 'row', gap: 50, borderRadius: 10, paddingLeft: 10, marginTop: 50, marginBottom: 10, backgroundColor: 'yellow'}}>
                <Text style={{color: 'white', fontFamily: 'Bold', fontSize: 18}}>{text1}</Text>
                <Text style={{color: 'white', fontFamily: 'Bold', fontSize: 18}}>{text2}</Text>
        </View>
    );
};

export default TableHead;