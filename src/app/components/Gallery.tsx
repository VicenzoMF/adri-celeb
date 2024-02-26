import { Section } from "@/app/components/Section";
import g1 from "@/app/assets/gallery/g1.jpg";
import g2 from "@/app/assets/gallery/g2.jpg";
import g3 from "@/app/assets/gallery/g3.jpg";

export function Gallery() {
  return (
    <div id="gallery">

      <Section.Root variant="middle">
        <Section.Title>Galeria</Section.Title>
        <div className="grid grid-cols-3 mt-6">
          <img src={g1.src} alt="Foto de adriana em uma celebração" />
          <img src={g2.src} alt="Foto de adriana em uma celebração" />
          <img src={g3.src} alt="Foto de adriana em uma celebração" />
          <img src={g1.src} alt="Foto de adriana em uma celebração" />
          <img src={g2.src} alt="Foto de adriana em uma celebração" />
          <img src={g3.src} alt="Foto de adriana em uma celebração" />
          <img src={g1.src} alt="Foto de adriana em uma celebração" />
          <img src={g2.src} alt="Foto de adriana em uma celebração" />
          <img src={g3.src} alt="Foto de adriana em uma celebração" />
        </div>
      </Section.Root>
    </div>
  );
}
