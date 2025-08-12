import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const router = useRouter()

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
          .then(async(userCredential) => {
            const user = userCredential.user;
            await AsyncStorage.setItem('@user', JSON.stringify(user));
            router.push('/HomeScreen');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(`Erro ${errorCode}`, `Erro ao cadastrar: ${errorMessage}`);
          });
}

export const userLogin = (email, password) =>  {
  signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const user = userCredential.user
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      router.push("/HomeScreen")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(`Erro ${errorCode}`, `Erro ao cadastrar: ${errorMessage}`);
    })
}

export const passwordReset = (email) => {
  sendPasswordResetEmail(auth, email)
  .then(()=> {
    alert("Enviado e-mail de recuperação")
  })
  .catch((error) => {
    console.log("Erro ao enviar email ", error.message);
    alert("Erro ao enviar email. Verifique se o email esta correto")
  })
}