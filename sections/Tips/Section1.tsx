import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Text */
  text?: string;
}
export default function Section1({ text, picture }: Props) {
  return (
    <div class="w-full bg-blue pb-8">
      <section class="container mx-auto flex justify-between items-center gap-5">
        <div class="w-1/2">
          <h1 class="font-FKScreamer font-black text-9xl text-purple mb-5 uppercase">
            <span class="text-gray uppercase ">o que são</span> <br /> as tips
          </h1>
          <p class="text-gray leading-7 text-lg">
            {text}
          </p>
        </div>

        <div class="w-1/2">
          <img src={picture} alt="fotografia player" />
        </div>
      </section>
    </div>
  );
}
