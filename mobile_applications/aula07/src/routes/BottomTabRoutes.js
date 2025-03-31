import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';
import Login from '../screens/Login';

const MyTabs = createBottomTabNavigator();

export default function BottomTabRoutes({route}) {
  return (
    <MyTabs.Navigator 
    screenOptions={{ headerShown: false }}
    initialRouteName={route?.params?.initialRouteName || "tabHome"}
    >
      <MyTabs.Screen 
      name="tabHome" 
      component={Home} 
      options={
        {tabBarIcon: () => <Feather name="home" size={30} color="black"/>, 
        tabBarLabel:"Inicio",
        tabBarActiveBackgroundColor: "green",
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: "black"
        }}
      }
      />
      <MyTabs.Screen 
      name="tabLogin" 
      component={Login} 
      options={
        {tabBarIcon: () => <Feather name="log-in" size={30} color="black"/>,
        tabBarLabel:"Login",
        tabBarActiveBackgroundColor: "green",
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: "black"
        }}
      }/>
    </MyTabs.Navigator>
  );
}