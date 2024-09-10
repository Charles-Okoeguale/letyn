import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const Container = ({ text, iconName, style, iconColor, iconSize, onClick, fontSize}) => {
    return (
        <TouchableOpacity onPress={onClick}>
        <View style={[styles.main, style]}>
            {text && <Text style={[styles.text, {fontSize: fontSize}]}>{text}</Text>}
            {iconName && <FontAwesome name={iconName} style={[styles.icon, { color: iconColor, fontSize: iconSize }]} />}
        </View>
        </TouchableOpacity>
    );
};

export default Container;

const styles = StyleSheet.create({
    main: {
        width: 68,
        height: 63,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000', 
        fontSize: 20, 
        alignSelf: 'center',
        fontFamily: 'SBold'
    },
});