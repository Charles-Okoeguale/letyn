import React from 'react';
import { Modal } from 'react-native';

const CustomModal = ({ 
    visible, 
    onClose, 
    childComponent: ChildComponent, 
    childComponentProps 
}) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
            presentationStyle="pageSheet"
        >
            <ChildComponent {...childComponentProps} />
        </Modal>
    );
};

export default CustomModal;
