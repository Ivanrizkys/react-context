import NavbarUserAvatar from "./NavbarUserAvatar";
import NavbarUserText from "./NavbarUserText";

const NavbarUser = () => {
    return (
        <>  
            <div className="flex justify-center items-center">
                <NavbarUserAvatar/>
                <NavbarUserText />
            </div>
        </>
    )
}

export default NavbarUser;