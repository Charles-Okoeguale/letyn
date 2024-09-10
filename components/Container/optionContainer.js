import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { calculateEm, calculateFontsize, calculatePercentageDimension, screenWidth } from '../../helpers';
import { SvgUri } from 'react-native-svg';

const OptionContainer = ({ text1, text2, iconName, style, iconColor, iconSize, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.main, style]}>
            <View style={styles.icon}>
            <View style={styles.container}>
            <SvgUri
            width={100}
            height={100}
            source={require('../../assets/fi-sr-home.svg')}
            />
            </View>
            </View>
            <View style={styles.description}>
            <Text style={styles.text1}>{text1}</Text>
            <Text style={styles.text2}>{text2}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default OptionContainer;

const styles = StyleSheet.create({
    main: {
        width: calculatePercentageDimension(382, 430),
        height: calculateEm(150),
        backgroundColor: '#333333',
        borderRadius: calculateEm(14),
        flexDirection: 'row'
    },
    description: {
        width: '55%',
        paddingTop: calculateEm(20),
        paddingRight: calculateEm(20)
    },
    icon: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Bold',
        fontSize: calculateFontsize(25, screenWidth)
    },
    text2: {
        color: '#FFFFFF',
        fontWeight: 'normal',
        fontSize: 15,
        fontFamily: 'Light',
        marginTop: 10
    },
    container: {
        width: 100,
        height: 90, 
        backgroundColor: '#000000', 
        borderRadius: 10,
    }
});