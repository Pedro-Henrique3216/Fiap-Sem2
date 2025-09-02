import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggleButton() {
    const { theme, toggleTheme, colors } = useTheme();

    return (
        <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.button }]}>
            <Text style={[styles.buttonText, { color: colors.buttonText }]}>
                Switch to {theme === "light" ? "dark" : "light"} mode
            </Text>
        </TouchableOpacity>
    );  
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