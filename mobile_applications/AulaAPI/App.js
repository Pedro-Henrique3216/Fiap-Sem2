import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "./src/Telas/TelaInicial";
import TelaResultado from "./src/Telas/TelaResultado";

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="TelaInicial"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaResultado" component={TelaResultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


