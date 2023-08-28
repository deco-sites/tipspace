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
    <section className="w-full bg-gray">
      <div className="container flex flex-col">
        <img src={picture} alt="goto mulher" class="rounded-2xl" />
        <h2 class="font-FKScreamer font-black text-7xl uppercase text-blue mt-4 mb-10 text-left">
          {headline}
        </h2>
        <p class="text-graylight text-md">{text}</p>
        <div class="mx-auto flex gap-6 my-6 items-center">
          <p class="text-graylight text-sm font-bold">08/08/2023 às 17h37</p>
          <a
            href=""
            class="text-blue bg-purple font-DMSans border-none  font-bold py-4 px-6 radio rounded-3xl mr-4 w-auto flex justify-center items-center"
          >
            LEIA MAIS
          </a>
        </div>
      </div>
    </section>
  );
}
