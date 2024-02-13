import { Navbar } from "./components/Navbar";

import LogoBrancoVermelho from "./assets/LogoBrancoVermelho.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-36">
        <img src={LogoBrancoVermelho.src} />
      </div>

      
      <section className="bg-slate-800 max-w-7xl rounded-3xl shadow-ring  m-auto mt-24 p-12 text-white">{/* Sobre */}
        <h1 className="text-5xl">Sobre a celebrante:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel repellendus odio amet. Officiis
          accusantium, adipisci sint dicta, neque doloribus eaque beatae possimus quibusdam aliquam ullam magni impedit
          molestiae maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel repellendus odio amet. Officiis
          accusantium, adipisci sint dicta, neque doloribus eaque beatae possimus quibusdam aliquam ullam magni impedit
          molestiae maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel repellendus odio amet. Officiis
          accusantium, adipisci sint dicta, neque doloribus eaque beatae possimus quibusdam aliquam ullam magni impedit
          molestiae maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel repellendus odio amet. Officiis
          accusantium, adipisci sint dicta, neque doloribus eaque beatae possimus quibusdam aliquam ullam magni impedit
          molestiae maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel repellendus odio amet. Officiis
          accusantium, adipisci sint dicta, neque doloribus eaque beatae possimus quibusdam aliquam ullam magni impedit
          molestiae maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel repellendus odio amet. Officiis
          accusantium, adipisci sint dicta, neque doloribus eaque beatae possimus quibusdam aliquam ullam magni impedit
          molestiae maxime?
        </p>
      </section>
    </>
  );
}
