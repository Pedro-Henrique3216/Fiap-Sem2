import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function InitailScreenTabs() {

  return(

    <View style={styles.container}>
      <Text style={styles.text}>Tela inicial - Tabs</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "yellow",
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})