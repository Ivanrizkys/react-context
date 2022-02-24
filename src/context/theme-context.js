import { createContext, useContext, useReducer  } from "react";

const ThemeContext = createContext({});

const useThemeContext = () => {
    return useContext(ThemeContext)
}

const reducer = (state, action) => {
	switch(action.type) {
		case "updateTheme":
			return {...state, theme: state.theme === "Light" ? "Dark" : "Light"}
		default:
			throw new Error("Unexpected Type")
	}
}

const initialState ={
	theme: "Light"
}

const ThemeProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const themeContextValue = [state, dispatch]
	
    return (
        <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider, useThemeContext };