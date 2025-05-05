import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function LoginScreen() {

  return(

    <View style={styles.container}>
      <Text style={styles.text}>Tela Login - Stack</Text>
      <Link href="/" style={{ fontSize: 20, color: '#000' }}>
        Ir para Home
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "blue",
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})