import { StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import { View } from 'react-native';
import { calculateEm, calculateFontsize } from '../../utils/helpers';
import ContinueButton from '../../components/Buttons/continueButton';

const WelcomeScreen = ({ navigation }) => {
    return (
      <ImageBackground
        source={require('../../assets/welcome.jpg')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.overlay}>
          <View>
            <Text style={styles.text1}>Welcome to</Text>
            <Text style={[styles.text2, {fontFamily: 'Bold'}]}>Letyn</Text>
            <Text style={styles.text1}>
              Join estates and residents who use Letyn to manage homes and pre-register visitors.
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', paddingRight: calculateEm(30)}}>
            <ContinueButton navigation={navigation}/>
          </View>
        </SafeAreaView>
      </ImageBackground>
    ) 
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  button: {
    height: calculateEm(52),
    borderRadius: 15,
    backgroundColor: '#E9D9B5',
    width: '90%',
    alignSelf: 'center',
},
  backgroundImage: {
    flex: 1,
    resizeMode: 'fit',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.90)',
    justifyContent: 'space-between',
  },
  text1: {
    color: 'white',
    fontFamily: 'SBold',
    paddingLeft: calculateEm(24),
    paddingTop: calculateEm(112),
    fontSize: calculateFontsize(35)
  },
  text2: {
    color: 'white',
    fontFamily: 'SLight',
    paddingLeft: calculateEm(24),
    fontSize: calculateFontsize(64),
  },
});
