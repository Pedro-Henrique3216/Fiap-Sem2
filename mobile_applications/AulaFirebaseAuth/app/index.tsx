import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { passwordReset, userLogin } from '../service/LoginService';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {
  // Estados para armazenar os valores digitados

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hiddenPassword, sethiddenPassword] = useState(false)

  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('@user');
      if (user) {
        router.push('/HomeScreen');
      }
    };
    checkUser();
  }, []);

  const showPassword = () => {
      sethiddenPassword(!hiddenPassword)
  }

  // Função para simular o envio do formulário
  const handleLogin = () => {
      if(email && senha){
          userLogin(email, senha)
      } else {
        Alert.alert("Atenção, todos os campos deve ser preenchido")
        return
      }
  };

  const forgotPassword = () => {
    if(!email){
      alert("Digite o email para recuperar a senha")
      return
    }
    passwordReset(email)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Realizar login</Text>


      {/* Campo Email */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo Senha */}
      <View style={styles.input}>
        <TextInput
        style={styles.textInput}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry={hiddenPassword}
        value={senha}
        onChangeText={setSenha}
        />
        <Ionicons
          onPress={showPassword}
          name={hiddenPassword ? "eye-off" : "eye"}
          size={32}
          color="green"
        />
      </View>
      

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20,color:'white',marginLeft:30}} onPress={forgotPassword}>Forgot Password</Text>
      <Link href="CadastrarScreen" style={{marginTop:20,color:'white',marginLeft:150}}>Cadastre-se</Link>

    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1E1E1E',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  textInput: {
    color: "#fff",
  },
  botao: {
    backgroundColor: '#00B37E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
