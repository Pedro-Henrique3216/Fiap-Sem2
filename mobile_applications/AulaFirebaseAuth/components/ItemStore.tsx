import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react";
import { updateItem, deleteItem } from "../service/DatabaseService";

type Props = {
    id: string;
    title: string;
    checked: boolean;
}

export default function ItemStore({ id, title, checked }: Props){

    const [isChecked, setIsChecked] = useState(checked)

    const deleteItens = async () => {
        Alert.alert("Exclusão","Deseja realmente excluir?",[
            {
                text:'Cancelar',style:'cancel'
            },
            {   text:"Sim",
                style:'destructive',
                onPress: async()=>(
                    await deleteItem(id)
                )
            }
        ])     
    }

    const toggleCheck = async () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        await updateItem(id, newValue);
    };


     return (
        <View style={styles.container}>
            <Pressable onPress={toggleCheck}>
                {isChecked ? (
                    <AntDesign name="checkcircle" color='black' size={24} />
                ) : (
                    <AntDesign name="checkcircleo" color='black' size={24} />
                )}
            </Pressable>

            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={deleteItens}>
                <MaterialIcons name='delete' size={24} color='black' />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 5,
    },
    title: {
        marginLeft: 10,
        fontSize:17,
        fontWeight: 800 
    }
})