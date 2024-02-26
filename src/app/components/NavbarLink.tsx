interface NavbarLinkProps {
    content: string;
    href: string;
}

export function NavbarLink({ content, href }: NavbarLinkProps) {


    return (
        <a href={href} className="text-white text-2xl transition-all hover:bg-slate-700 px-1.5 sm:px-4 py-1 rounded-full" >{ content }</a>
    )
}