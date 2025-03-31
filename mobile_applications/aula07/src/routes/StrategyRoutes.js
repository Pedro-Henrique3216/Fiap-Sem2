import { NavigationContainer } from "@react-navigation/native"
import BottomTabRoutes from "./BottomTabRoutes"
import DrawerRoutes from "./DrawerRoutes"

export default function StrategyRoutes() {
  return(
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}