import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Text */
  text?: string;
}
export default function Section1({ text, picture }: Props) {
  return (
    <div class="w-full bg-blue pb-8 px-4 md:px-0">
      <section class="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-5">
        <div class="w-full md:w-1/2">
          <h1 class="font-FKScreamer font-black text-7xl md:text-9xl text-purple mb-5 uppercase">
            <span class="text-gray uppercase ">o que são</span> <br /> as tips
          </h1>
          <p class="text-gray leading-7 text-lg">
            {text}
          </p>
        </div>

        <div class="w-full md:w-1/2">
          <img src={picture} alt="fotografia player" />
        </div>
      </section>
    </div>
  );
}
