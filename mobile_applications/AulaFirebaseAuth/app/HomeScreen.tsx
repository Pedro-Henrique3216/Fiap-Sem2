import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { deleteAccount } from "../service/LoginService";
import ItemStore from "../components/ItemStore";
import { useState } from "react";
import { addItem } from "../service/DatabaseService";

export default function HomeScreen() {

    const [title, setTitle] = useState("")
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
        <SafeAreaView style={styles.container}>
            <Text>Bem-vindo à tela inicial!</Text>
            <TouchableOpacity onPress={logoff}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmDeleteAccount}>
                <Text style={{ color: "red" }}>Deletar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/ChangingPassword")}>
                <Text style={{color: "green"}}>Alterar Senha</Text>
            </TouchableOpacity>
            <ItemStore />
            <ItemStore />
            <ItemStore />
            <TextInput 
                placeholder="Digite o nome do produto" 
                style={styles.input}
                value={title}
                onChangeText={(value) => setTitle(value)}
                onSubmitEditing={() => addItem(title, setTitle)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        backgroundColor: "lightgray",
        padding:10,
        fontSize:15,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "auto",
    }
})