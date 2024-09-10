import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container/container';
import CustomTable from '../components/customTable';

const ItemListScreen = ({ tableHead, tableData, widthArr, handlePress, handleRowClick }) => {
    return (
        <View style={{flex: 1, height: '100%', backgroundColor: '#000000'}}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={30} 
                iconName={'angle-down'} 
                style={{marginLeft: 5, width: 68, height: 63}}
                onClick={handlePress}
            /> 
            <Text style={styles.text}>Item list(s)</Text>
            <CustomTable
                tableHead={tableHead}
                tableData={tableData}
                widthArr={widthArr}
                handlePress={handlePress}
                handleRowClick={handleRowClick}
            />
        </View>
    );
};

export default ItemListScreen;

const styles = StyleSheet.create({
    text: {
        color: 'white', 
        fontSize: 25, 
        alignSelf: 'center',
        marginTop: 30,
        fontFamily: 'Bold'
    },
});
