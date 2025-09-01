import { Alert } from "react-native";
import { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "../config/FirebaseConfig"

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

export const updateItem = async (id, isChecked) => {
    try {
        const itemRef = doc(db, "items", id);
        await updateDoc(itemRef, {
            isChecked: isChecked
        });
        console.log("Documento atualizado", id);
        Alert.alert("Sucesso", "Produto atualizado com sucesso");
    } catch (e) {
        console.log("Error updating document: ", e);
    }
}

export const deleteItem = async (id) => {
    try {
        await deleteDoc(doc(db, "items", id));
        Alert.alert("Sucesso", "Produto deletado com sucesso");
        getItems();
    } catch (e) {
        console.log("Error deleting document: ", e);
    }
}

export const getItems = async (setListaItem) => {
    try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setListaItem(items);
    } catch (e) {
        console.log("Error getting documents: ", e);
        setListaItem([]);
    }
}
