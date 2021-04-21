import React, { createContext, useState, useRef, useContext } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: handleToggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    return context;
};
