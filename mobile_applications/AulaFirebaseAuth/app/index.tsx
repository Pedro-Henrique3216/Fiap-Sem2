import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { passwordReset, userLogin } from '../src/service/LoginService';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../src/context/ThemeContext';
import ThemeToggleButton from '../src/components/ThemeToggleButton';
import { useTranslation } from 'react-i18next';
import LenguageToggleButton from '../src/components/LenguageToggleButton';

export default function LoginScreen() {
  // Estados para armazenar os valores digitados

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hiddenPassword, sethiddenPassword] = useState(true)
  const { colors } = useTheme();
  //Hook do i18next, que fornece a função t para buscar e traduzir para o idioma atual
  const { t } = useTranslation()
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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.titulo, { color: colors.text }]}>{t("login")}</Text>


      {/* Campo Email */}
      <TextInput
        style={[styles.input, { backgroundColor: colors.textInputBackground, color: colors.textInputText }]}
        placeholder="E-mail"
        placeholderTextColor={colors.placeholderText}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo Senha */}
      <View style={[styles.input, { backgroundColor: colors.textInputBackground }]}>
        <TextInput
        style={[styles.textInput, { backgroundColor: colors.textInputBackground, color: colors.textInputText }]}
        placeholder="Senha"
        placeholderTextColor={colors.placeholderText}
        secureTextEntry={hiddenPassword}
        value={senha}
        onChangeText={setSenha}
        />
        <Ionicons
          onPress={showPassword}
          name={hiddenPassword ? "eye-off" : "eye"}
          size={25}
          color="green"
        />
      </View>
      

      {/* Botão */}
      <TouchableOpacity style={[styles.botao, { backgroundColor: colors.button}]} onPress={handleLogin}>
        <Text style={[styles.textoBotao, { color: colors.buttonText }]}>Login</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20,color:colors.text}} onPress={forgotPassword}>Forgot Password</Text>
      <Link href="CadastrarScreen" style={{marginTop:20,color:colors.text}}>Cadastre-se</Link>
      <ThemeToggleButton />
      <View>
          <LenguageToggleButton lang="pt"/>
          <LenguageToggleButton lang="en"/>
          <LenguageToggleButton lang="es"/>
      </View>
      
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
    paddingHorizontal: 10,
    height: "6%",
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  textInput: {
    color: "#fff",
    flex: 1,
    fontSize: 16,
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
