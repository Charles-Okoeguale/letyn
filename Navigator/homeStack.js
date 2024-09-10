import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard/dashboard';
import MainProfileScreen from '../screens/Profile/main';
import ResidenceScreen from '../screens/Profile/residence';
import SelectEstateLayout from '../screens/selectEstateLayout';
import UploadScreen from '../screens/upload';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
          title: false, 
          headerTransparent: true,  
          headerTintColor: '#000000', 
          headerBackTitleVisible: false 
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen 
        name="Profile" 
        component={MainProfileScreen}
      />
       <Stack.Screen 
        name="LayoutType" 
        component={SelectEstateLayout}
        options={{ headerTitle: 'Select estate layout', headerTitleStyle: {fontFamily: 'Bold'} }}
      />
      <Stack.Screen name="Residences" component={ResidenceScreen}/>
      <Stack.Screen name="Upload" component={UploadScreen}/>
      {/* <Stack.Screen 
        name="SetupType" 
        component={ChooseSetupTypeScreen}
        options={{ headerTitle: 'Setup method', headerTitleStyle: {fontFamily: 'Bold'} }}
      /> */}
      {/* <Stack.Screen 
        name="NumberOfStreets" 
        component={SetNumberOfStreets}
        options={{ headerTitle: 'Add street(s)', headerTitleStyle: {fontFamily: 'Bold'} }}
      /> */}
      {/* <Stack.Screen 
        name="ResidenceLayout" 
        component={SetResidenceLayout} 
        options={{ headerTitle: 'Setup residence', headerTitleStyle: {fontFamily: 'Bold'} }}
      /> */}
      {/* <Stack.Screen name="ResidenceName" component={SetResidenceNameScreen}/> */}
      {/* <Stack.Screen name="SelectResidence" component={SelectResidenceScreen}/> */}
      {/* <Stack.Screen 
        name="ResidenceType" 
        component={SetResidenceType}
        options={{ headerTitle: 'Select residence type(s)', headerTitleStyle: {fontFamily: 'Bold'} }}
      /> */}
      {/* <Stack.Screen name="SetFlats" component={SetFlats}/> */}
    </Stack.Navigator>
  );
};

export default HomeStack;

