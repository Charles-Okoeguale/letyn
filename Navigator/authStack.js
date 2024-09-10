import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContinueScreen from '../screens/Authentication/continue';
import EstateLogin from '../screens/Authentication/EstateLogin'
import EstateRegister from '../screens/Authentication/EstateRegister'
import Password from '../screens/Authentication/password'
import VerificationScreen from '../screens/Authentication/verification';
import WelcomeScreen from '../screens/Authentication/welcome';
import AddPhoneNumberScreen from '../screens/Authentication/addPhonenumber';
import MainOfficeScreen from '../screens/Authentication/mainOfficeAddress';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Welcome" 
      screenOptions={{
        title: false, 
        headerTransparent: true,  
        headerTintColor: '#000000',
      }}
    >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerLeft: null }}/>
        <Stack.Screen name="Continue" component={ContinueScreen}/>
        <Stack.Screen 
          name="EstateLogin" 
          component={EstateLogin} 
        />
        <Stack.Screen 
          name="EstateRegister" 
          component={EstateRegister} 
        />
        <Stack.Screen 
          name="Password" 
          component={Password}
        />
        <Stack.Screen 
          name="AddPhoneNumber" 
          component={AddPhoneNumberScreen} 
        />
        <Stack.Screen 
          name="Verification" 
          component={VerificationScreen} 
        />
         <Stack.Screen 
          name="MainOffice" 
          component={MainOfficeScreen} 
        />
    </Stack.Navigator>
  );
};

export default AuthStack;
