import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";

export default function TelaInicial(props) {
 return (
     <ImageBackground source={require('../../assets/HomePage.png')} style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 50}}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => props.navigation.navigate('TelaResultado', {escolhaUsuario: 'gifs'})} 
        >
          <Text style={styles.txtbtn}>GIFS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => props.navigation.navigate('TelaResultado', {escolhaUsuario: 'stickers'})} 
        >
          <Text style={styles.txtbtn}>STICkERS</Text>
        </TouchableOpacity>
      </View>
     </ImageBackground>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   btn: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: 10,
      borderRadius: 10,
      width: 100,
      alignItems: 'center',
   },
   txtbtn: {
     color: 'white',
     fontWeight: 'bold',
    },
 });