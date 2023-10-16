import { HTML } from "deco-sites/std/components/types.ts";
import type { Image as DecoVideo } from "deco-sites/std/components/types.ts";

export interface Video {
  video?: DecoVideo;
}

export interface Props {
  /** @title Title */
  title: string;
  /** @title Text */
  text: HTML;
  /** @title Videos */
  videos?: Array<DecoVideo>;
}

export default function Tip({ title, text, videos }: Props) {
  return (
    <section class="bg-blue pt-0">
      <div className="container relative mb-20 -mt-10">
        <HomeBoxes></HomeBoxes>
      </div>
      <div className="container flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10">
        <img src="image/tipemtip.png" alt="" />
        <div class="text-gray mt-4 md:mt-0 text-xl w-full md:w-3/6 text-center md:text-left">
          Conheça e acompanhe a trajetória de jogadores que já fizeram uma grana
          aqui na Tipspace, deixando suas partidas mais emocionantes!
        </div>
      </div>
      <div className="container">
        <div class="carousel w-full">
          {videos?.map((item, index) => {
            return (
              <div id={`slider${index}`} class="carousel-item relative w-full">
                <img
                  src={item}
                  key={index}
                  class="w-full"
                />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slider${(index - 1).toString()}`}
                    class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl mr-1 flex justify-center items-center"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slider${(index + 1).toString()}`}
                    class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl mr-1 flex justify-center items-center"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeBoxes() {
  return (
    <div class="flex gap-3 text-center mx-auto w-full justify-center">
      <img src="/images/box-1.png" alt="100% Skill based" />
      <img src="/images/box-2.png" alt="Modos 1v1 e 2v2" />
      <img src="/images/box-3.png" alt="CPF + ID Check" />
      <img src="/images/box-4.png" alt="Resgate de forma simples" />
    </div>
  );
}
