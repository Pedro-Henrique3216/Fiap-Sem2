import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Feather from 'react-native-vector-icons/Feather';
import BottomTabRoutes from "./BottomTabRoutes";

const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
  return (
        
      <Drawer.Navigator >
        <Drawer.Screen 
        name="Home" 
        component={BottomTabRoutes} 
        options={
          {drawerIcon: () => <Feather name="home" size={30} color="black"/>, 
          drawerLabel:"Inicio",
          drawerLabelStyle: {
            fontWeight: "bold",
            color: "black"
          }}
        }
        />
        <Drawer.Screen 
        name="Login" 
        component={BottomTabRoutes}
        initialParams={{initialRouteName: "tabLogin"}}
        options={
          {drawerIcon: () => <Feather name="log-in" size={30} color="black"/>,
          drawerLabel:"Login",
          drawerLabelStyle: {
            fontWeight: "bold",
            color: "black"
          }}
        }/>
      </Drawer.Navigator>
    );
}