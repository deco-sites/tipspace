import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Title */
  headline?: string;
}

export default function Section1({
  picture,
  headline,
}: Props) {
  return (
    <div class="w-full bg-blue pb-8 px-4 md:px-0">
      <section class="container mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-20">
        <h1
          class="font-FKScreamer font-black italic text-9xl uppercase text-purple w-2/5"
          style={{ fontSize: "10rem" }}
        >
          jogue <br /> valendo!
        </h1>
        <video
          src="/videos/hero-main.webm"
          class="rounded-3xl w-3/5"
          playsInline
          autoPlay
          muted
          loop
        />
      </section>
      <section class="container py-20 max-w-xl lg:max-w-2xl">
        <h3 class="text-xl text-gray text-center ">
          A plataforma onde cada vitória nos jogos se transforma em grana real
          no bolso!{" "}
          <span class="font-black">
            Jogue valendo nas ranqueadas ou nos modos exclusivos,
          </span>{" "}
          e torne suas partidas muito mais emocionantes e desafiadoras
        </h3>
      </section>
    </div>
  );
}
