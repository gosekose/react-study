import { createContext, useContext } from "react";
import { theme } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const ThemedComponent = () => {
    const currentTheme = useContext(ThemeContext);

    return (
        <div style={{ background: currentTheme.primary.main }}>
            This component is themed!
        </div>
    )

}