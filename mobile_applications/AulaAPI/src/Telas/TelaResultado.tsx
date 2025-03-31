import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import API_KEY from "../API_KEY";
import { useEffect, useState } from "react";

async function getGifs(link:string) {
  const response = await fetch(link);
  const data = await response.json();
  return data.data;
}

export default function TelaResultado({route}) {

  const [gifs, setGifs] = useState<any[]>([]);

  const escolhaUsuario = route.params.escolhaUsuario;
  

  const link = `https://api.giphy.com/v1/${escolhaUsuario}/trending?api_key=${API_KEY}`;
  
  

  useEffect(() => {
    getGifs(link).then(setGifs).catch(console.error);
  }, []);

  
  return (
    <ImageBackground source={require("../../assets/BG.png")} style={{ flex: 1 }}>
      {gifs.length > 0 ? (
        gifs.map((gif, index) => (
          <View key={index}>
            <Text>{gif.title}</Text>
            <Image source={{ uri: gif.images.original.url }} style={{ width: 200, height: 200 }} />
          </View>
        ))
      ) : (
        <Text>Carregando...</Text>
      )}
    </ImageBackground>
  );
}
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
 });