import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const SwipeableRow = ({ children, onDelete }) => {
    const renderRightActions = (progress, dragX) => {
        return (
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={onDelete}
            >
                <Text style={styles.deleteText}>Exit</Text>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            friction={2}
            overshootRight={false}
        >
            {children}
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: '100%',
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SwipeableRow;

