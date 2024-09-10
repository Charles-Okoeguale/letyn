import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Dashboard/homeScreen';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faHouse, faListUl, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import AddScreen from './Dashboard/add';
import ListScreen from './Dashboard/list';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AddStack = createStackNavigator();
const ListStack = createStackNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
);

const AddStackScreen = () => (
    <AddStack.Navigator screenOptions={{ headerShown: false }}>
      <AddStack.Screen name="Home" component={AddScreen} />
    </AddStack.Navigator>
);

const ListStackScreen = () => (
    <ListStack.Navigator screenOptions={{ headerShown: false }}>
      <ListStack.Screen name="Home" component={ListScreen} />
    </ListStack.Navigator> 
);
  

// const CommunityNavigationScreen = () => {
//     return (
//         <View style={{ flex: 1, backgroundColor: '#000000' }}>
//             <StatusBar style="auto" />
//             <SafeAreaView style={{flex: 1}}>
//             <NavigationContainer>
//             <Tab.Navigator
//                     screenOptions = {{
//                         tabBarStyle: { 
//                             backgroundColor: '#000000',
//                             borderRadius: 10,
//                             width: '55%',
//                             height: 50,
//                             alignSelf: 'center',
//                             paddingLeft: 5,
//                             paddingRight: 5,
//                             borderTopWidth: 0,
                           
//                         },
//                        tabBarShowLabel: false,
//                        tabBarItemStyle: {
//                             alignSelf: 'center',
//                             marginTop: '13%',
//                             height: 40,
//                             borderRadius: 10 ,
//                         },
//                         headerShown: false,
//                     }}
//             > 
//                     <Tab.Screen 
//                         name="Home" 
//                         component={HomeStackScreen}
//                         options={{
//                             tabBarIcon: ({focused}) => 
//                                 <FontAwesomeIcon 
//                                     icon={faHouse} 
//                                     size={22} 
//                                     color={focused ? 'black' : '#726E6D'}
//                                 />,
//                             tabBarActiveBackgroundColor: 'white'
//                         }}
//                     />
//                     <Tab.Screen 
//                         name="Add" 
//                         component={AddStackScreen}
//                         options={{
//                             tabBarIcon: ({focused}) => 
//                                 <FontAwesomeIcon 
//                                     icon={faUserPlus} 
//                                     size={22} 
//                                     color={focused ? 'black' : '#726E6D'}
//                                 />,
//                             tabBarActiveBackgroundColor: 'white'
//                         }}
//                     />
//                      <Tab.Screen 
//                         name="Settings" 
//                         component={ListStackScreen}
//                         options={{
//                             tabBarIcon: ({focused}) => 
//                                 <FontAwesomeIcon 
//                                 icon={faListUl} 
//                                 size={22} 
//                                 color={focused ? 'black' : '#726E6D'}
//                             />,
//                             tabBarActiveBackgroundColor: 'white'
//                         }}
//                     />
//                 </Tab.Navigator>
//             </NavigationContainer>
//             </SafeAreaView>
//         </View>
//     )
// }

// export default CommunityNavigationScreen;
