import { useThemeContext } from "../context/theme-context";

const DisplayTheme = () => {
    const [state] = useThemeContext()
    console.log("DisplayTheme: render")
    return (
        <p className="text-center">{state.theme}</p>
    )
}

export default DisplayTheme;