import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Text */
  text?: string;
  /** @title Title */
  headline?: string;
}
export default function Section1({ headline, text, picture }: Props) {
  return (
    <div class="w-full bg-blue pb-28 md:pb-96 px-4 md:px-0">
      <section class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <div class="w-full md:w-1/2">
          <h1 class="font-FKScreamer font-black text-7xl md:text-9xl uppercase text-purple mb-5">
            <span class="text-gray ">FIQUE BEM</span> <br /> INFORMADO
          </h1>
          <p class="text-gray leading-7 text-lg">
            {text}
          </p>
        </div>

        <div class="w-full md:w-1/2">
          <img src={picture} alt="fotografia player" />
        </div>
      </section>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mt-20">
          <a
            href="#"
            class="text-gray bg-none font-DMSans border-green border-solid  font-bold py-2 px-6 radio rounded-3xl mr-4 w-auto flex justify-center items-center"
            style={{ borderWidth: "1px" }}
          >
            League of Legends
          </a>
          <a
            href="#"
            class="text-gray bg-none border-green border-solid  font-bold py-2 px-6 radio rounded-3xl mr-4 w-auto flex justify-center items-center"
            style={{ borderWidth: "1px" }}
          >
            Quick Tips
          </a>
          <a
            href="#"
            class="text-gray bg-none border-green border-solid  font-bold py-2 px-6 radio rounded-3xl mr-4 w-auto flex justify-center items-center"
            style={{ borderWidth: "1px" }}
          >
            Tipspace
          </a>
          <a
            href="#"
            class="text-gray bg-none border-green border-solid  font-bold py-2 px-6 radio rounded-3xl mr-4 w-auto flex justify-center items-center"
            style={{ borderWidth: "1px" }}
          >
            Modo de jogos
          </a>
        </div>
      </div>
    </div>
  );
}
