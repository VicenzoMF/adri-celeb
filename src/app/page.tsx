import { Navbar } from "./components/Navbar";

import { About } from "./components/About";
import { PostsCarousel } from "./components/PostsCarousel";
import { Logo } from "./components/Logo";
import { Gallery } from "./components/Gallery";
// import Head from "next/head";

export default function Home() {
  return (
    <>
    {/* <Head>
      <title>Adriana Frusciante</title>
      <meta name="description" content="Adriana Frusciante - Celebrante de casamentos" />
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
      <section className="w-full">
        <Navbar />
        <div className="flex justify-center mt-36 mb-36">
          <Logo />
        </div>
      </section>

      {/* Sobre */}
      <About/>

      {/* Posts */}
      <PostsCarousel />

      <Gallery />
    </>
  );
}
