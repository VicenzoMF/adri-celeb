interface NavbarLinkProps {
    content: string;
}

export function NavbarLink({ content }: NavbarLinkProps) {


    return (
        <button className="text-white text-2xl transition-all hover:bg-red-500 px-1.5 sm:px-4 py-1 rounded-full" >{ content }</button>
    )
}