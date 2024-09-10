import { StyleSheet, View, Image, Text} from 'react-native';

const RegisterCards = ({text, image, width, height}) => {
    return (
        <View style={{height: 200, alignItems: 'center', gap: 10}}>
            <View style={styles.container}>
            <Image source={image} style={{ width: width, height: height, borderRadius: 20}}/>
            </View>
            <Text style={{color: 'white', fontWeight: '700'}}>
                {text}
            </Text>
        </View>
    )
}

export default RegisterCards;

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1A1B'
    },
});