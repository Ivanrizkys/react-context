import { useAppContext } from "../context/app-context";

const NavbarUserText = () => {
    const [state] = useAppContext()
    console.log("NavbarUserText: render")
    return (
        <p>{state.user.name}</p>
    )
}

export default NavbarUserText;