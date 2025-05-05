import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function InitailScreenStack() {

  return(

    <View style={styles.container}>
      <Text style={styles.text}>Tela inicial - Stack</Text>
      <Link href="/login" style={{ fontSize: 20, color: '#000' }}>
        Ir para tela de login
        </Link>
        <Link href="/(drawer)" style={{ fontSize: 20, color: '#000' }}>
        Ir para o Drawer
        </Link>
        <Link href="/(tabs)" style={{ fontSize: 20, color: '#000' }}>
        Ir para o Tabs
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