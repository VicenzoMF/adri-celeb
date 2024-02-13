
import { NavbarLink } from './NavbarLink';

export function Navbar() {
    return (
        <div className="flex items-center justify-center mt-24 gap-0 md:gap-6">
            <NavbarLink content="Home" />
            <NavbarLink content="Sobre" />
            <NavbarLink content="Galeria" />
            <NavbarLink content="Contato" />
        </div>
    )
}