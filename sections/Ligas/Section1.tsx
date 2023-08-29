import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Text */
  text?: string;
  /** @title Subtitle */
  title?: string;

  /** @title Upload box 1 image */
  picture1?: DecoImage;
  /** @title Text box 1 */
  text1?: string;
  /** @title Title box 1 */
  title1?: string;

  /** @title Upload box 2 image */
  picture2?: DecoImage;
  /** @title Text box 2*/
  text2?: string;
  /** @title Title box 2 */
  title2?: string;

  /** @title Upload box 3 image */
  picture3?: DecoImage;
  /** @title Text box 3*/
  text3?: string;
  /** @title Title box 3 */
  title3?: string;
}
export default function Section1(
  {
    text,
    picture,
    title,
    picture1,
    text1,
    title1,
    picture2,
    text2,
    title2,
    picture3,
    text3,
    title3,
  }: Props,
) {
  return (
    <div class="w-full bg-blue pb-8">
      <section class="container mx-auto flex justify-between items-center gap-5">
        <div class="w-3/6">
          <img src={picture} alt="fotografia player" />
        </div>
        <div class="w-3/6">
          <h1 class="font-FKScreamer font-black text-9xl text-purple mb-5 uppercase">
            <span class="text-gray uppercase ">Jogue nossas</span> <br />{" "}
            ligas e ganhe <br /> premiações
          </h1>
          <p class="text-gray leading-7 text-lg font-DMSans">
            {text}
          </p>
        </div>
      </section>
      <h2 class="text-center mt-16 text-gray font-FKScreamer font-black uppercase text-7xl">
        {title}
      </h2>
      <div className="container flex items-center justify-between gap-3 mt-10">
        <div class="bg-green w-1/3 rounded-3xl py-10 px-6">
          <div className="flex justify-between items-center mb-5">
            <h3 class=" text-blue font-FKScreamer font-black uppercase text-7xl">
              {title1}
            </h3>
            <img src={picture1} alt="#" class="w-10 h-10" />
          </div>
          <p class="text-blue">{text1}</p>
        </div>
        <div class="bg-purple w-1/3 rounded-3xl py-10 px-6">
          <div className="flex justify-between items-center mb-5">
            <h3 class=" text-gray font-FKScreamer font-black uppercase text-7xl">
              {title2}
            </h3>
            <img src={picture2} alt="#" class="w-10 h-10" />
          </div>
          <p class="text-gray">{text2}</p>
        </div>
        <div class="bg-green w-1/3 rounded-3xl py-10 px-6">
          <div className="flex justify-between items-center mb-5">
            <h3 class=" text-blue font-FKScreamer font-black uppercase text-7xl">
              {title3}
            </h3>
            <img src={picture3} alt="#" class="w-12 h-12" />
          </div>
          <p class="text-blue">{text3}</p>
        </div>
      </div>
    </div>
  );
}
