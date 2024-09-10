import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, SafeAreaView } from 'react-native';

const CustomModal = ({ children, visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalContainer}>
            {children}
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default CustomModal;
