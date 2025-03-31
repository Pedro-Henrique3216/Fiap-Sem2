import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import PersonalInformation from './src/components/PersonalInformation';

//Nível 01 – Incluir dois TextInput, e mostrar as informações de nomeAluno e emailAluno no console.log
 
//Nível 02 - Incluir dois TextInput e um Button, e após inserir as informações nos TextInput’s e clicar no Button enviar deverá ser renderizado na tela a informação do nomeAluno e emailAluno.
 
//Nível 03 - Incluir dois TextInput e um Button, e passar o nomeAluno e emailAluno via props para um componente e em seguida renderizar na tela Principal do seu App.

export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState("");

  const [click, setClick] = useState(false);

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/Fiap-logo-novo.jpg')} 
        style={styles.image}
        />
        <TextInput 
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={name => setName(name)}
          autoCapitalize='words'
          maxLength={30}
        />
        <TextInput 
          placeholder="Enter your email"
          style={styles.input}
          onChangeText={email => setEmail(email)}
          autoCapitalize='words'
          maxLength={30}
          inputMode='email'
        />
        <Button 
          title='Click here'
          onPress={() => setClick(!click)}  
        />

        {/* {click &&
          <View>
            <Text style={{color: '#fff', fontSize: 20, marginTop: 20}}>
              Name: {name}
            </Text>
            <Text style={{color: '#fff', fontSize: 20, marginTop: 20}}>
              Email: {email}
            </Text>
          </View>
        } */}

        {click && 
         <PersonalInformation name={name} email={email} />
        }
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed145b',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    resizeMode: 'center',
    width: 250,
    height: 250,
  },
  input: {
    backgroundColor: '#fff',
    width: 250,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  }
});
