import { useThemeContext } from "../context/theme-context";

const ToggleTheme = () => {
    const [, dispatch] = useThemeContext()

    const toggleHandler = (e) => {
        dispatch({
            type: "updateTheme"
        })
    }   
    
    return (
        <button className="bg-gray-500 rounded-md block mx-auto px-2" onClick={toggleHandler}>Toggle Theme</button>
    )
}

export default ToggleTheme;