import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { calculateEm, calculateFontsize, capitalizeFirstLetter } from '../utils/helpers';
import { NotificationSvg } from './SVGs/notification';
import { getDetailsFromSecureStore } from '../utils/handle_storage';
import { useForm } from '../Context/FormContext';

const Header = ({navigation}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(null);
  const [details, setDetails] = useState()

  const [loaded, error] = useFonts({
    'SpaceGrotesk-Bold': require('../assets/fonts/SpaceGrotesk-Bold.ttf'),
    'SpaceGrotesk-Light': require('../assets/fonts/SpaceGrotesk-Light.ttf'),
  });

  const getEstateDetails = async () => {
    await getDetailsFromSecureStore('letyn_token', setDetails);
  }

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
      setFontError(error);
      getEstateDetails()
    }
  }, [loaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  

  return (
    <SafeAreaView style={styles.header}>
      <View style={{
        width: calculateEm(292),
        height: calculateEm(59),
        // backgroundColor: '#E8E8E8',
        borderRadius: calculateEm(10),
        paddingLeft: calculateEm(4),
        flexDirection: 'row', 
        alignItems: 'center',
        gap: calculateEm(5)
      }}>
        <Avatar
          size={49}
          rounded
          containerStyle={{ backgroundColor: '#E8E8E8' }}
          // onPress={() => {
          //   deleteItemFromAsyncStorage('letyn_token');
          //   deleteItemFromAsyncStorage('letyn_user_id');
          //   deleteItemFromAsyncStorage('letyn_estate_name');
          //   deleteItemFromAsyncStorage('letyn_address');
          //   setToken(false);
          // }}
          onPress={async () => {
            navigation.navigate("Profile")
          }}
        />
        <View>
          <Text style={{fontSize: calculateFontsize(14), fontFamily: 'Bold'}}>{capitalizeFirstLetter(details?.estateName)}</Text>
          <Text style={{fontSize: calculateFontsize(12), fontFamily: 'SLight'}}>{details?.city}, {details?.state}, {details?.country}</Text>
        </View>
      </View>
      <View style={{
        width: calculateEm(56),
        height: calculateEm(56),
        borderRadius: calculateEm(30),
        backgroundColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: calculateEm(5)
      }}>
       <NotificationSvg color={'#000000'} height={calculateEm(24)} width={calculateEm(24)}/>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
    header: {
      height: '10%', 
      width: '95%',
      alignSelf: 'center',
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between',
    },
});


// <Avatar
//         size={40}
//         rounded
//         containerStyle={{ backgroundColor: "#333333" }}
//         onPress={() => {
//           deleteItemFromAsyncStorage('letyn_token');
//           deleteItemFromAsyncStorage('letyn_user_id');
//           deleteItemFromAsyncStorage('letyn_estate_name');
//           deleteItemFromAsyncStorage('letyn_address');
//           setToken(false);
//         }}
// />