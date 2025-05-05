import { StyleSheet, View, Text } from 'react-native'

export default function About() {
  return(
    <View style={styles.container}>
        <Text style={styles.text}>Tela Sobre - Tabs</Text>
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