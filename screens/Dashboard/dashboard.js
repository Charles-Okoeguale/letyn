import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from '../../Navigator/bottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function Dashboard() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // <NavigationContainer independent={true}>
    //   <BottomTabsNavigator />
    // </NavigationContainer>
  );
}
