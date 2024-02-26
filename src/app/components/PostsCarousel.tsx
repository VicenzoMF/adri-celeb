import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import foto1 from "../../../public/assets/foto1.jpg";
import { playfair } from "@/lib/fonts";
import { Section } from "./Section";

const post = [
    {
        id: 1,
        title: "Titulo",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat fuga perferendis exercitationem fugit. Voluptas, quidem libero beatae deleniti, omnis sed consequuntur dignissimos consectetur, officiis ducimus ut blanditiis ex at dolor?",
        images: [foto1.src, foto1.src]
    },
    {
      id: 2,
      title: "Titulo teste",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat fuga perferendis exercitationem fugit. Voluptas, quidem libero beatae deleniti, omnis sed consequuntur dignissimos consectetur, officiis ducimus ut blanditiis ex at dolor?",
      images: [foto1.src, foto1.src]
  }
]

export function PostsCarousel() {
  return (
    <div id="posts">
      <Section.Root variant="middle">
        <Carousel>
          <CarouselContent>
            { post.map(post => {
              return (
                <CarouselItem key={post.id}>
                <Section.Title > {post.title} </Section.Title>
                <div className="lg:grid lg:grid-cols-3 lg:mt-4 lg:gap-4 space-y-4">
                    <p className="text-justify indent-8">
                        {post.content}
                    </p>
                    <img src={post.images[0]}/>
                    <img src={post.images[1]}/>
                </div>
              </CarouselItem>)
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Section.Root>
    </div>
  );
}
