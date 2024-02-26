
import { NavbarLink } from './NavbarLink';

export function Navbar() {
    return (
        <div className="flex items-center justify-center pt-24 gap-0 md:gap-6">
            <NavbarLink href="#about" content="Sobre" />
            <NavbarLink href="#posts" content="Posts" />
            <NavbarLink href="#gallery" content="Galeria" />
            <NavbarLink href="#contact" content="Contato" />
        </div>
    )
}