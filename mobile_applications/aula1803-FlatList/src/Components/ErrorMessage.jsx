import { StyleSheet, Text, View } from "react-native";

export default function ErrorMessage({showError}) {
  return showError && <Text style={styles.errorText}>Erro ao carregar os dados</Text>;
}


const styles = StyleSheet.create({
    errorText: {
        color: '#721c24',
        fontSize: 20,
        marginTop: 40,
        alignSelf: 'center',
        width: '80%',
        textAlign: 'center',
    },
})