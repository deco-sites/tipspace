import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Heading */
  heading?: string;
  //   /** @title Heading */
  //   card1?: Card;
  //   /** @title Heading */
  //   card2?: Card;
  //   /** @title Heading */
  //   card3?: Card;
  //   /** @title Heading */
  //   card4?: Card;
}

export default function Download(
  { heading }: Props,
) {
  return (
    <section class="w-full relative bg-gray pt-14 pb-36 px-4 md:px-0">
      <div class="container flex flex-col gap-10">
        <div class="flex justify-center gap-10 bg-white rounded-xl max-w-5xl mx-auto">
          <img src="/images/featured-image-1.png" alt="jogador" class="w-1/2" />
          <div class="w-1/2 flex flex-col gap-6">
            <div class="flex justify-start gap-4 items-center pt-10">
              <img src="image/content1.png" alt="" />
              <a
                href="#"
                class="uppercase text-xs font-black text-blue py-2 px-3 bg-green border-none rounded-lg"
              >
                crie sua conta e jogue agora!
              </a>
            </div>
            <h3 class="text-blue font-bold text-2xl font-DMSans">
              100% de bônus em <br /> depósitos até R$500
            </h3>
            <ul class="flex flex-col gap-3 pb-10">
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content2.png" alt="#" />
                Acompanhe o rollover na carteira
              </li>
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content3.png" alt="#" />
                Use seu bônus para fazer uma grana real!
              </li>
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content4.png" alt="#" />
                Simples e seguro, tudo via PIX
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center gap-10 bg-white rounded-xl max-w-5xl mx-auto">
          <div class="w-1/2 flex flex-col gap-6 pl-10">
            <div class="flex justify-start gap-4 items-center pt-10">
              <img src="image/content6.png" alt="" />
              <a
                href="#"
                class="uppercase text-xs font-black text-blue py-2 px-3 bg-green border-none rounded-lg"
              >
                ENTRE NAS LIGAS TIPSPACE!
              </a>
            </div>
            <h3 class="text-blue font-bold text-2xl font-DMSans">
              Ligas Tipspace: Desafios <br /> com premiação em dinheiro!
            </h3>
            <ul class="flex flex-col gap-3 pb-10">
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content5.png" alt="#" />
                Jogue suas partidas e pontue nas ligas
              </li>
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content2.png" alt="#" />
                Participe de ligas semanais com desafios exclusivos
              </li>
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content4.png" alt="#" />
                Premiação distribuidas para vários jogadores!
              </li>
            </ul>
          </div>
          <img src="/image/box22.png" alt="jogador" class="w-1/2" />
        </div>
        <div class="flex justify-center gap-10 bg-white rounded-xl max-w-5xl mx-auto">
          <img src="/image/content7.png" alt="jogador" class="w-1/2" />
          <div class="w-1/2 flex flex-col gap-6">
            <div class="flex justify-start gap-4 items-center pt-10">
              <img src="image/content8.png" alt="" />
              <a
                href="#"
                class="uppercase text-xs font-black text-blue py-2 px-3 bg-green border-none rounded-lg"
              >
                ASSINE E CURTA ATÉ 07 DIAS GRÁTIS!
              </a>
            </div>
            <h3 class="text-blue font-bold text-2xl font-DMSans">
              Curta a experiência <br />
              completa da Tipspace!
            </h3>
            <ul class="flex flex-col gap-3 pb-10">
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content2.png" alt="#" />
                Jogue com ou sem tips nos modos 1v1 e 2v2
              </li>
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content3.png" alt="#" />
                Ligas exclusivas para assinantes
              </li>
              <li class="text-blue text-sm flex justify-start items-center gap-3">
                <img src="image/content3.png" alt="#" />
                Entrada free em todas as ligas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
