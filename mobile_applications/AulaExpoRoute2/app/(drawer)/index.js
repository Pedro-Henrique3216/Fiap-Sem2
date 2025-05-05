import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function InitailScreenDrawer() {

  return(

    <View style={styles.container}>
      <Text style={styles.text}>Tela inicial - Drawer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "orange",
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})