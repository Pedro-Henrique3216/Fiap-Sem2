import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { ActivityIndicator, Alert, Button, FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { deleteAccount } from "../src/service/LoginService";
import ItemStore from "../src/components/ItemStore";
import { use, useEffect, useState } from "react";
import { addItem, getItems } from "../src/service/DatabaseService";
import { useTheme } from "../src/context/ThemeContext";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';


//Confguração para receber notificações em primeiro plano
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true, //som da notificação
        shouldSetBadge: false, //Não alters o badge do app
        shouldShowBanner: true, //Exibir banner
        shouldShowList: true //Exibir histórico de notificações
    })
});

interface Item {
    id: string;
    title: string;
    isChecked: boolean;
}

export default function HomeScreen() {

    const [title, setTitle] = useState("")
    const [listaItems, setListaItems] = useState<Item[]>([])
    const { colors } = useTheme();
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

    const saveItem = async () => {
        if (!title) return;
        await addItem(title, setTitle);
        findItems();
    }

    const findItems = async () => {
        await getItems(setListaItems);
    }

    const scheduleNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Promoção Especial!",
                body: "Aproveite nossa promoção exclusiva!"
            },
            trigger: {
                type:  Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 2,
                repeats: false
            }
        });
    }

    useEffect(() => {
        findItems()
    }, [])


    useEffect(() => {
        const checkNotificationPermissions = async () => {
            const { status } = await Notifications.getPermissionsAsync();
                if (status !== 'granted') {
                    console.log("Permissão para notificações não concedida. Solicitando permissão...");
                }
                //Solicitar permissão para receber notificações
            Notifications.requestPermissionsAsync()
                .then((response) => {
                    if (response.granted) {
                        console.log("Permissão para notificações concedida!");
                    } else {
                        console.log("Permissão para notificações negada!");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao solicitar permissão para notificações:", error);
                });
        }
        checkNotificationPermissions();
    }, []);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <KeyboardAvoidingView //é componente que ajusta automaticamente o layout
                style={styles.container}
                behavior={Platform.OS==='ios'?'padding':'height'}//No ios é utilizado padding, e no android o height
                keyboardVerticalOffset={20}//Descola o conteúdo na vertical em 20 pixel
            >

            <Text style={[styles.text, { color: colors.text }]}>Seja bem-vindo a Tela Inicial da Aplicação</Text>
            <Button title="Sair da Conta" onPress={logoff} />
            <Button title="Exluir conta" color='red' onPress={confirmDeleteAccount} />
            <Button title="Alterar Senha" onPress={() => router.push("/AlterarSenha")} />
            <Button title="Agendar Notificação" onPress={scheduleNotification} />

            {listaItems.length <= 0 ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={listaItems}
                    renderItem={({ item }) => (
                       <ItemStore
                            title={item.title}
                            checked={item.isChecked}
                            id={item.id}                        
                       />
                    )}
                />
            )}

            <TextInput
                placeholder="Digite o nome do produto"
                style={[styles.input, { backgroundColor: colors.textInputBackground, color: colors.textInputText }]}
                value={title}
                placeholderTextColor={colors.placeholderText}
                onChangeText={(value) => setTitle(value)}
                onSubmitEditing={saveItem}
            />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    },
    input: {
        padding: 10,
        fontSize: 15,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 'auto',
        borderWidth: 1,
        borderColor: 'gray'
    }
})