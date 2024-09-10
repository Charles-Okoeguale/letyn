import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Helper functions (assuming these are defined elsewhere)
const calculateEm = (value) => value; // Replace with actual implementation
const calculateFontsize = (value) => value; // Replace with actual implementation

// Define a functional component
const NameCard = ({ name, value, no, number }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{name}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>

            <View>
                <Text style={styles.label}>{no}</Text>
                <Text style={styles.value}>{number}</Text>
            </View>
            
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: calculateEm(53),
        color: '#000000',
        borderBottomWidth: 1,
        borderColor: '#E8E8E8',
        paddingLeft: calculateEm(10),
        justifyContent: 'space-between', // Optional: aligns text vertically
        marginBottom: calculateEm(20),
        flexDirection: 'row',
        paddingRight: calculateEm(30),
    },
    label: {
        fontFamily: 'SBold',
        fontSize: calculateFontsize(18),
    },
    value: {
        fontFamily: 'SLight',
        fontSize: calculateFontsize(18),
    },
});

export default NameCard;
