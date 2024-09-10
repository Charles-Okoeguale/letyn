import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';

const logoImage = require("../assets/-high-resolution-logo-transparent.png")

const LaunchScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={logoImage} style={{ width: 110, height: 110}}/>
            <StatusBar style="auto" />
        </View>
    )
}

export default LaunchScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EF7DF9',
      alignItems: 'center',
      justifyContent: 'center',
    },
});