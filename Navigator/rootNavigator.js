import HomeStack from './homeStack';
import AuthStack from './authStack';
import { useForm } from '../Context/FormContext';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const Stack = createStackNavigator(); 

export const RootNavigator = () => {
    const { authenticated, setAuthenticated, token } = useForm();

    useEffect(() => {
      const checkToken = async () => {
        try {
            const auth_token = await SecureStore.getItemAsync('letyn_token'); 
            if (auth_token !== null) {
                setAuthenticated(true); 
            } else {
                setAuthenticated(false);
            }
        } catch (error) {
            console.error('Error checking token:', error);
        }
    };
    
        checkToken(); 
    }, [token]);

    return (
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    );
  };
  