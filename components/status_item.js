import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateEm } from '../utils/helpers';
import { CheckBox } from '@rneui/themed';

const StatusItem = ({
    indicatorColor,
    text,
    containerStyle,
    handleCheckbox,
    checked,
}) => {
    return (
        <>
        {text === 'Show password' ? (
            <View style={[styles.container, containerStyle]}>
                <CheckBox
                    checked={checked}
                    onPress={handleCheckbox}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={styles.checkbox}
                    checkedColor='#000000'
                    uncheckedColor='#000000'
                /> 
                <Text style={styles.text}>{text}</Text>
            </View>
        ) : (
            <View style={[styles.container, containerStyle]}>
                <View style={[styles.indicator, { backgroundColor: indicatorColor }]}></View>
                <Text style={styles.text}>{text}</Text>
            </View>
        )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        paddingLeft: calculateEm(10),
        // backgroundColor: 'yellow'
    },
    checkbox: {
        backgroundColor: '#FFFFFF',
    },
    indicator: {
        width: calculateEm(10),
        height: calculateEm(10),
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'grey'
    },
    text: {
        fontFamily: 'SBold',
    },
});

export default StatusItem;
