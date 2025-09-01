// Context será o responsável pelo gerenciamento do tema (claro/escuro)

import { createContext, useContext, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const colorScheme = Appearance.getColorScheme();

    const [theme, setTheme] = useState(colorScheme || "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const themeColors = {
        light: {
            background: "#ffffff",
            text: "#000000",
            button: "#007bff",
            buttonText: "#ffffff",
            textInputBackground: "#f0f0f0",
            textInputText: "#000000",
            placeholderText: "#000000"
        },
        dark: {
            background: "#000000",
            text: "#ffffff",
            button: "#1bf007",
            buttonText: "#000000",
            textInputBackground: "#333333",
            textInputText: "#ffffff",
            placeholderText: "#ffffff"
        },
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colors: themeColors[theme] }}>
            {children}
        </ThemeContext.Provider>
    );
}