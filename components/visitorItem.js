import { StyleSheet, View, Text, TextInput } from 'react-native';  
import { calculateEm, calculateFontsize } from '../utils/helpers';
import { Button } from '@rneui/base';

const VisitorItem = ({ index, placeholder, style, value, onChange, subtract, add, noOfItem }) => {
    return (
        <View style={[styles.body, style]} key={index}>
            <View style={styles.main}>
                <TextInput 
                    style={styles.input} 
                    placeholder={placeholder} 
                    placeholderTextColor={'#000000'}
                    onChangeText={onChange}
                    value={value}
                />
                <View style={styles.buttonContainer}>
                <Button 
                    buttonStyle={styles.subtractButton}
                    onPress={subtract}
                >
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </Button>
                <View style={[styles.input, styles.numberContainer]}>
                    <Text style={styles.numberText}>{noOfItem}</Text>
                </View>
                <Button 
                    buttonStyle={styles.addButton}
                    onPress={add}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </Button>
            </View>
            </View>
        </View>
    );
};

export default VisitorItem;

const styles = StyleSheet.create({
    body: {
        width: '80%',
        gap: 1,
        height: calculateEm(70),
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        borderRadius: calculateEm(10)
    },
    input: {
        width: '50%',
        borderRadius: 10,
        height: calculateEm(40),
        color: '#000000',
        paddingLeft: 15,
        fontFamily: 'SLight',
        fontSize: calculateFontsize(14),
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    main: {
        width: '99%',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5,
        justifyContent: 'space-between'
    },
    buttonContainer: {
        width: calculateEm(150),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: calculateEm(5)
    },
    subtractButton: {
        width: calculateEm(40),
        height: calculateEm(40),
        borderRadius: calculateEm(10),
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    addButton: {
        width: calculateEm(40),
        height: calculateEm(40),
        borderRadius: calculateEm(10),
        backgroundColor: '#FFFFFF',
    },
    buttonText: {
        fontFamily: 'Bold', 
        fontSize: calculateFontsize(20),
        color: '#000000'
    },
    numberContainer: {
        width: '30%', 
        backgroundColor: '#000000',  
        paddingLeft: 0, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    numberText: {
        color: '#FFFFFF', 
        fontFamily: 'Bold', 
        fontSize: calculateFontsize(20)
    }
});

