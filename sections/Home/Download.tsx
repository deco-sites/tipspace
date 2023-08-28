import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/types.ts";

export interface Card {
  heading?: string;
  text?: HTML;
  picture?: DecoImage;
}

export interface Props {
  /** @title Heading */
  heading?: string;
  /** @title Heading */
  card1?: Card;
  /** @title Heading */
  card2?: Card;
  /** @title Heading */
  card3?: Card;
  /** @title Heading */
  card4?: Card;
}

export default function Download(
  { heading, card1, card2, card3, card4 }: Props,
) {
  return (
    <section class="w-full bg-gray pt-14 pb-36">
      <div class="container">
        <h2 class="text-blue font-black text-5xl mb-7">{heading}</h2>
        <div class="flex flex-wrap w-full justify-between gap-7">
          <div class="w-7/12 bg-purple px-10 pt-10 flex justify-between align-top rounded-3xl">
            <div>
              <h3 class="font-FKScreamer font-black text-4xl text-white mb-5">
                {card1?.heading}
              </h3>
              {card1?.text && (
                <div
                  class="text-base font-DMSans text-white"
                  dangerouslySetInnerHTML={{ __html: card1?.text }}
                >
                </div>
              )}
            </div>
            <div class="w-full h-auto">
              <img src={card1?.picture} alt="imagem ilustrativa" />
            </div>
          </div>
          <div class="w-4/12 bg-blue px-10 pt-10 flex flex-col justify-start gap-8 rounded-3xl">
            <div>
              <h3 class="font-FKScreamer font-black text-4xl text-white mb-5">
                {card2?.heading}
              </h3>
              <div>
                <img src={card2?.picture} alt="imagem ilustrativa" />
              </div>
              {card2?.text && (
                <div
                  class="text-base font-DMSans text-green my-8"
                  dangerouslySetInnerHTML={{ __html: card2?.text }}
                >
                </div>
              )}
            </div>
          </div>
          <div class="w-4/12 bg-blue px-10 pt-10 flex rounded-3xl">
            <div class="flex justify-center items-center flex-col">
              <div>
                <h3 class="font-FKScreamer font-black text-4xl text-white mb-5">
                  {card3?.heading}
                </h3>
                {card3?.text && (
                  <div
                    class="text-base font-DMSans text-green mb-7"
                    dangerouslySetInnerHTML={{ __html: card3?.text }}
                  >
                  </div>
                )}
              </div>
              <div>
                <img
                  src={card3?.picture}
                  alt="imagem ilustrativa"
                  class="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div class="w-7/12 bg-purple px-10 pt-10 flex justify-between align-top rounded-3xl">
            <div>
              <h3 class="font-FKScreamer font-black text-4xl text-white mb-5">
                {card4?.heading}
              </h3>
              {card4?.text && (
                <div
                  class="text-base font-DMSans text-white"
                  dangerouslySetInnerHTML={{ __html: card4?.text }}
                >
                </div>
              )}
            </div>
            <div class="w-full h-auto">
              <img src={card4?.picture} alt="imagem ilustrativa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
