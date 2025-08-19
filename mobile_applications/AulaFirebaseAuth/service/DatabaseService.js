import { Alert } from "react-native";
import { addDoc, collection, db } from "../config/FirebaseConfig"

export const addItem = async (title, setTitle) => {
    try {
        const docRef = await addDoc(collection(db, "items"), {
            title: title,
            isChecked: false
        })
        console.log("Documento salvo", docRef.id);
        Alert.alert("Sucesso", "Produto Salvo com sucesso")
        setTitle("")
    } catch(e) {
        console.log("Error adding document: ", e);
        
    }
}