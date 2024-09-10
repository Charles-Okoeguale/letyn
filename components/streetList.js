import React from 'react';
import { View } from 'react-native';
import CustomTable from './customTable';


const tableHead2 = ['Street name', 'No of houses', ''];
const widthArr2 = [200, 135, 100]; 
const name3 = [
    ['Romford', '5', '>'],
    ['Dubai', '5', '>'],
    ['Vienna', '5', '>'],
]


const StreetList = ({text1, text2}) => {
    return (
        <View>
            <CustomTable
                tableHead={tableHead2}
                tableData={name3}
                widthArr={widthArr2}
                // handlePress={handlePress}
                // handleRowClick={handleRowClick}
            />
        </View>
    );
};

export default StreetList;
