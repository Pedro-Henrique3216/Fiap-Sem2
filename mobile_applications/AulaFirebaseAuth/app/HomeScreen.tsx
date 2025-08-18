import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { deleteAccount } from "../service/LoginService";

export default function HomeScreen() {
    const router = useRouter();
    const logoff = async () => {
        await AsyncStorage.removeItem("@user");
        router.push("/");
    }

    const confirmDeleteAccount = () => {
        Alert.alert(
            "Deletar conta",
            "Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Deletar",
                    style: "destructive",
                    onPress: async () => {
                        await deleteAccount();
                    }
                }
            ]
        );
    }

    return (
        <SafeAreaView>
            <Text>Bem-vindo à tela inicial!</Text>
            <TouchableOpacity onPress={logoff}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmDeleteAccount}>
                <Text style={{ color: "red" }}>Deletar Conta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}