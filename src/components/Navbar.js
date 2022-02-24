import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center">
                <NavbarLink>Home</NavbarLink> | <NavbarLink>Dashboard</NavbarLink>
            </div>
            <NavbarLink>
                <NavbarUser />
            </NavbarLink>
        </>
    )
}

export default Navbar;