import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons"


export default function ItemStore(){
    return (
        <View style={styles.container}>
            <Pressable>
                <AntDesign name="checkcircleo" color="black" size={24} />
            </Pressable>
            <Text style={styles.title} >Mouse Gamer</Text>
            <Pressable>
                <MaterialIcons name="delete" size={24} color="black"/>
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