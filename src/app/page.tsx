import { Navbar } from "./components/Navbar";

import { About } from "./components/About";
import { PostsCarousel } from "./components/PostsCarousel";
import { Logo } from "./components/Logo";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { supabase } from '@/api/supabase';


export default function Home() {
  return (
    <>

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

      {/* Galeria */}
      <Gallery />

      {/* Contato */}
      <Contact />
    </>
  );
}
