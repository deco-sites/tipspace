import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Text */
  text?: string;
  /** @title Titleitle */
  title?: string;
}
export default function Section1(
  { picture, text, title }: Props,
) {
  return (
    <div class="w-full bg-blue pb-8">
      <section className="container mx-auto flex justify-between items-center gap-5">
        <div class="w-3/6">
          <h1 class="font-FKScreamer font-black text-9xl text-purple mb-5 uppercase">
            {title}
          </h1>
          <p class="text-gray leading-7 text-lg font-DMSans">{text}</p>
        </div>
        <div class="w-3/6 relative">
          <img src={picture} alt="imagem jogador" />
          <p class="absolute 2xl:bottom-20 2xl:right-48 xl:bottom-20 xl:right-16 lg:bottom-14 lg:right-4 font-FKScreamer font-black text-6xl text-green uppercase w-60">
            CONQUISTE SUA LIBERDADE FINANCEIRA
          </p>
        </div>
      </section>
    </div>
  );
}
