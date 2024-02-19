import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  variant: "top" | "middle" | "bottom";
}

export function SectionRoot({ children, variant }: SectionTitleProps) {
  return (
    <section
      className={`bg-slate-200 max-w-7xl shadow-ring m-auto pt-24 p-12 ${
        variant === "top" ? "lg:rounded-t-lg" : variant === "middle" ? "" : "lg:rounded-b-lg"
      }`}
    >
      {children}
    </section>
  );
}
