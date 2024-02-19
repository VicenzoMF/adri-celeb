import Image from "next/image";
import foto1 from "../../../public/assets/foto1.jpg";
import { playfair } from "../../lib/fonts";
import { Section } from "./Section";

export function About() {
  return (
    <>
      <Section.Root variant="top">
        <Section.Title>Sobre a celebrante:</Section.Title>
        {/* Sobre */}

        <div className="lg:grid lg:grid-cols-3 lg:mt-4 lg:gap-4">
          <div className="col-span-2 space-y-4">
            <p className=" text-justify indent-8">
              Formada em Jornalismo, Adriana Frusciante atua como mestre de cerimônia desde 2012 e em 2016 recebeu um
              convite muito especial, o de realizar a cerimônia de seu irmão caçula. Foi neste momento que a celebrante
              se apaixonou pelo mundo dos casamentos e se dedicou a diversas especializações no ramo. Hoje ela encanta
              os casais com discursos lindos e emocionantes.
            </p>

            <h1 className="text-lg text-slate-600 font-bold">Serviços oferecidos:</h1>

            <p className=" text-justify indent-8">
              Adriana Frusciante realiza um cerimônia personalizada, sempre seguindo as vontades e desejos do casal.
              Através de uma discurso único e emocionante, a celebrante extrai a essência do casal e envolve a todos os
              presentes, deixando esse momento ainda mais leve, encantador e romântico. Atua em celebrações de
              casamentos, renovação de votos e bodas, podendo conduzir cerimônias tradicionais ou com rituais
              simbólicos. FAz celebrações bilíngues em italiano e espanhol também. É habilitada para fazer casamentos
              religiosos com efeito civil.
            </p>

            <h1 className="text-lg text-slate-600 font-bold">Área de atuação:</h1>

            <p className=" text-justify indent-8">
              Situada na cidade de Porto Alegre, Rio Grande do Sul, Adriana Frusciante atende em qualquer lugar do
              Brasil e do mundo! Se vocês ficaram interessados e querem saber mais informações, basta entrarem em
              contato com a celebrante através de uma mensagem pelo portal. Aproveitem!
            </p>
          </div>
          <Image src={foto1} className="" alt={"Foto de adriana em uma celebração"} />
        </div>
      </Section.Root>
    </>
  );
}
