import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const router = useRouter();
    const logoff = async () => {
        await AsyncStorage.removeItem("@user");
        router.push("/");
    }
    return (
        <SafeAreaView>
            <Text>Bem-vindo à tela inicial!</Text>
            <TouchableOpacity onPress={logoff}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}