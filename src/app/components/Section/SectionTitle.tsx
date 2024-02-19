import { playfair } from "@/lib/fonts";

interface SectionTitleProps {
    children: string | string[];
}


export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h1 className={`${playfair.className} text-5xl text-slate-700 font-bold`} > {children} </h1>
    )
}