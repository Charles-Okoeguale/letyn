import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Dashboard/homeScreen';
import ListScreen from '../screens/Dashboard/list';
import AddScreen from '../screens/Dashboard/add';
import { GroupSvg } from '../components/SVGs/group';
import { calculateEm } from '../utils/helpers';
import { HomeFillSvg } from '../components/SVGs/homefill';
import { VectorSvg } from '../components/SVGs/vector';

const Tab = createBottomTabNavigator();
function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}  
        options={{
            tabBarIcon: () => (
                <HomeFillSvg color={'#000000'} height={calculateEm(23)} width={calculateEm(23)}/>
            ),
            tabBarLabelStyle: {
                fontSize: calculateEm(12),
                fontFamily: 'SBold'
            },
            headerShown: false
        }}
      />
      <Tab.Screen 
        name="Add Visitor" 
        component={AddScreen} 
        options={{
            tabBarIcon: () => (
                <GroupSvg color={'#000000'} height={calculateEm(25)} width={calculateEm(25)}/>
            ),
            tabBarLabelStyle: {
                fontSize: calculateEm(12),
                fontFamily: 'SBold'
            },
        }}
      />
      <Tab.Screen 
        name="Visitor's List" 
        component={ListScreen}
        options={{
            tabBarIcon: () => (
                <VectorSvg color={'#000000'} height={calculateEm(25)} width={calculateEm(25)}/>
            ),
            tabBarLabelStyle: {
                fontSize: calculateEm(12),
                fontFamily: 'SBold'
            },
            tabBarIconStyle: {
                marginTop: calculateEm(5)
            },
            
            headerTitle: 'Home',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: calculateEm(20),
            },
            headerStyle: {
              height: calculateEm(60),  // Adjust header height to ensure proper placement
            }
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
