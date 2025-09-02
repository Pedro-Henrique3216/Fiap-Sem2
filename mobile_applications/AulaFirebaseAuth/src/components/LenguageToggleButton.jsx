import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../context/ThemeContext";

export default function LenguageToggleButton({lang}) {

    const { i18n } = useTranslation()
    const { colors } = useTheme();

    //Função para alterar idioma
    const changeLenguage = (newLang) => {
        i18n.changeLanguage(newLang)
    }

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.button }]} onPress={() => changeLenguage(lang)}>
                <Text style={[styles.buttonText, { color: colors.buttonText }]}>Alterar {lang}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        textAlign: "center",
    },
});