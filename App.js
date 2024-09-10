import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createContext, useEffect } from 'react';
import { FormProvider, useForm } from './Context/FormContext';
import { RootNavigator } from './Navigator/rootNavigator';
import { AuthProvider } from './Context/AuthContext';

export const appContext = createContext()

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    'Bold' : require("./assets/fonts/Inter_28pt-Black.ttf"),
    'Light' : require("./assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    'Thin' : require("./assets/fonts/Inter_24pt-Thin.ttf"),
    'SBold' : require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    'SLight' : require("./assets/fonts/SpaceGrotesk-Light.ttf"),
  });

  if (!fontsLoaded) {
    if (fontError) {
      console.error('Error loading fonts:', fontError);
    }
    return null;
  }  

  return (
      <FormProvider>
        <AuthProvider>
          <PaperProvider>
            <NavigationContainer>
              <RootNavigator/>
            </NavigationContainer>
        </PaperProvider>
        </AuthProvider>
      </FormProvider>
  );
} 

