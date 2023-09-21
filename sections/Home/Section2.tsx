import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Title */
  headline?: string;
  /** @title Upload your 1 photo */
  picture1?: DecoImage;
  /** @title Upload your 2 photo */
  picture2?: DecoImage;
  /** @title Upload center photo */
  picturec?: DecoImage;
  /** @title Upload your 3 photo */
  picture3?: DecoImage;
  /** @title Upload your 4 photo */
  picture4?: DecoImage;
}

export default function Section2(
  { headline, picture1, picture2, picture3, picture4, picturec }: Props,
) {
  return (
    <section class="w-full bg-blue pb-12 px-4 md:px-0 mx-auto">
      <div className="container flex gap-16 justify-center">
        <div class="flex flex-col gap-24 pt-8">
          <div class="flex flex-col items-end">
            <img src={picture1} alt="" /> <br />
            <span class="text-gray text-lg text-right">
              SUAS RANKEADAS VALENDO MUITO MAIS!
            </span>
          </div>
          <div class="flex flex-col items-end">
            <img src={picture2} alt="" /> <br />
            <span class="text-gray text-lg text-right">
              Conheça todos os modos e jogue valendo!
            </span>
          </div>
        </div>
        <div>
          <img src={picturec} alt="" />
        </div>
        <div class="flex flex-col gap-24 pt-8">
          <div class="flex flex-col items-start">
            <img src={picture3} alt="" /> <br />
            <span class="text-gray text-lg text-left">
              ganhe grana a cada vitória
            </span>
          </div>
          <div class="flex flex-col items-start">
            <img src={picture4} alt="" /> <br />
            <span class="text-gray text-lg text-left">
              Partidas com muito mais emoção
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
