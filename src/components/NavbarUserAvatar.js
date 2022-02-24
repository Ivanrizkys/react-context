import { useAppContext } from "../context/app-context";

const NavbarUserAvatar = () => {
    const [state] = useAppContext()
    console.log("NavbarUserAvatar: render")
    return (
        <img className="w-[50px] h-[50px]" src={state.user.avatar} alt="foto" />
    )
}

export default NavbarUserAvatar;