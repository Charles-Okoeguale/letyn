import { StyleSheet, View, TextInput, Text } from 'react-native';
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { CheckBox } from '@rneui/themed';

const Visitor = ({visitor, handleOpenModal, onInputChange, index }) => {
    return (
        <View style={styles.body} key={index}>
            <TextInput
                style={styles.input}
                placeholder={'Enter name of visitor'}
                placeholderTextColor={'#000000'}
                onChangeText={(text) => onInputChange('name', text)}
                value={visitor.name}
            />
            <TextInput
                style={styles.input}
                placeholder={'Enter phone number'}
                placeholderTextColor={'#000000'}
                onChangeText={(text) => onInputChange('phoneNumber', text)}
                value={visitor.phoneNumber}
            />
            <View style={{
                width: '95%',
                flexDirection: 'row',
                backgroundColor: '#E8E8E8',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: calculateEm(13),
                borderRadius: calculateEm(10)
            }}>
                <Text style={{fontFamily: 'SLight'}}>Items</Text>
                <CheckBox
                    onPress={handleOpenModal}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{
                        backgroundColor: '#E8E8E8',
                    }}
                    checkedColor='#000000'
                    uncheckedColor='#000000'
                    checked={visitor.items.length > 0}
                />
            </View>
        </View>
    );
};

export default Visitor;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        gap: 0.5,
        height: calculateEm(200),
        alignItems: 'center',
        borderRadius: calculateEm(10),
        gap: calculateEm(10),
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        marginBottom: calculateEm(40)
        
    },
    input: {
        width: '95%',
        borderRadius: 10,
        height: calculateEm(53),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'SLight',
        fontSize: calculateFontsize(14),
        backgroundColor: '#FFFFFF'
      },
    main: {
        width: '99%',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        backgroundColor: 'blue'
    }
});