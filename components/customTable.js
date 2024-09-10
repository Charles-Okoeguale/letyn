import React from 'react';
import { Text } from 'react-native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import SwipeableRow from './swipeablerow';

const CustomTable = ({ tableHead, tableData, widthArr, handlePress, handleRowClick, handleEdit, handleDelete }) => {

    return (
        <View style={styles.container}>
        <Table borderStyle={styles.tableBorder}>
            <Row
                data={tableHead}
                style={styles.headerRow}
                widthArr={widthArr}
            />
            {tableData.map((rowData, index) => (
                <SwipeableRow
                    key={index}
                    onEdit={() => handleEdit(index)}
                    onDelete={() => handleDelete(index, rowData)}
                >
                    <TouchableOpacity onPress={() => handleRowClick(index, rowData)}>
                    <Row
                        data={rowData}
                        style={[
                            styles.row,
                            rowData.some(data => data.items) ? styles.greenRow : null
                        ]}
                        widthArr={widthArr}
                    />
                    </TouchableOpacity>
                </SwipeableRow>
            ))}
            </Table>
        </View>
    );
};

export default CustomTable;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    greenRow: {
        backgroundColor: 'green', 
      },
    tableBorder: {
        borderWidth: 0,
    },
    headerRow: {
        marginTop: 10,
        color: '#000000',
        fontSize: 15,
        paddingLeft: 10,
        fontFamily: 'Bold',
    },
    row: {
        backgroundColor: '#FFFFFF',
        height: 70,
        fontFamily: 'SLight',
        marginLeft: 10,
    },
    cell: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    cellText: {
        color: '#000000',
        fontSize: 15,
        fontFamily: 'SLight',
    },
});