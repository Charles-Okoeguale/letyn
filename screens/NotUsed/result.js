import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Image, Text} from 'react-native';
import { Button } from '@rneui/themed';

const successImage = require("../assets/check_14025690.png")

const ResultScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto'/>
            <Image source={successImage} style={{ width: 110, height: 110}}/>
            <Text style={{color: 'white', fontWeight: 700}}>Account created successfully</Text>
            <Button 
                size="lg" 
                titleStyle={{fontWeight: 900}}
                buttonStyle={{
                    width: 380, 
                    height: 60, 
                    backgroundColor: 'darkgrey', 
                    marginTop: 200, 
                    fontWeight: 700, 
                    borderRadius: 5
                }}
            >
                Go to account
            </Button>
        </SafeAreaView>
    )
}

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    },
});