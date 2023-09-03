import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Upload banner */
  picture?: DecoImage;
  /** @title Title */
  headline?: string;
}

export default function Section1({
  picture,
  headline,
}: Props) {
  return (
    <div class="w-full bg-blue pb-8 px-4 md:px-0">
      <section class="container mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-5">
        <div class="w-full lg:w-1/2">
          <h1 class="font-FKScreamer font-black text-7xl lg:text-9xl uppercase text-purple mb-5 hidden lg:block">
            <span class="text-gray ">O QUE É A</span> <br /> tipspace
          </h1>
          <h1 class="font-FKScreamer font-black text-7xl uppercase text-purple mb-5 block lg:hidden text-center">
            <span class="text-gray text-center ">O QUE É A</span> tipspace
          </h1>
          <p class="text-gray leading-7 text-lg">
            Tipspace é uma plataforma de jogos revolucionária que capacita os
            jogadores a ganhar dinheiro real enquanto aprimora sua experiência
            de jogo. Ela vai além das plataformas tradicionais, oferecendo
            vários caminhos para os jogadores ganharem dinheiro jogando, como
            participar de ligas com premiações, fazer um lance em seus próprios
            jogos ou em de terceiros, baseados no desempenho dos jogadores.
          </p>
        </div>
        <div class=" relative carousel w-full bg-[url('/image/vidro.png')] bg-center bg-no-repeat bg-contain md:hidden">
          <div class="absolute transform -translate-y-1/2 top-16 right-3">
            <a
              href="#slide3"
              class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl mr-1"
            >
              ❮
            </a>
            <a
              href="#slide2"
              class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl ml-1"
            >
              ❯
            </a>
          </div>
          <div id="slide1" class="carousel-item relative w-full">
            <div className="w-full">
              <div class="w-full px-10 py-7 flex items-center flex-col gap-5">
                <h2 class="text-purple text-4xl text-center font-FKScreamer font-black">
                  SELF-BETTING
                </h2>
                <p class="text-gray text-center text-sm">
                  Para aqueles que amam um pouco de risco e emoção, o modo Tip
                  permite <br />
                  que os usuários palpitem diretamente em seu próximo jogo,
                  oferecendo <br />
                  opções de lances flexíveis e atualizações de probabilidades em
                  tempo <br />
                  real. A plataforma também fornece um recurso de carteira para
                  os <br />
                  usuários gerenciarem seus ganhos em dinheiro de maneira fácil
                  e <br />
                  segura. Aqui não tem segredo: palpitou, acertou, ganhou
                  dinheiro na conta!<br />
                </p>
                <a
                  href=""
                  class="inline-block text-blue bg-green radio-primary border-none text-center font-bold mx-auto py-2 px-6 rounded-lg"
                >
                  SEJA UM TIPPER!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* desk */}
        <div
          class=" hidden md:relative carousel w-1/2 bg-[url('/image/vidro.png')] bg-center bg-no-repeat bg-contain"
          style={{ width: "592px", height: "640px" }}
        >
          <div class="absolute transform -translate-y-1/2 top-16 right-3">
            <a
              href="#slide3"
              class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl mr-1"
            >
              ❮
            </a>
            <a
              href="#slide2"
              class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl ml-1"
            >
              ❯
            </a>
          </div>
          <div id="slide1" class="carousel-item relative w-full">
            <div className="w-full">
              <div class="w-full px-20 py-14 flex items-center flex-col gap-10  ">
                <h2 class="text-purple text-7xl text-center font-FKScreamer font-black">
                  SELF-BETTING
                </h2>
                <p class="text-gray text-center text-lg">
                  Para aqueles que amam um pouco de risco e emoção, o modo Tip
                  permite <br />
                  que os usuários palpitem diretamente em seu próximo jogo,
                  oferecendo <br />
                  opções de lances flexíveis e atualizações de probabilidades em
                  tempo <br />
                  real. A plataforma também fornece um recurso de carteira para
                  os <br />
                  usuários gerenciarem seus ganhos em dinheiro de maneira fácil
                  e <br />
                  segura. Aqui não tem segredo: palpitou, acertou, ganhou
                  dinheiro na conta!<br />
                </p>
                <a
                  href=""
                  class="inline-block text-blue bg-green radio-primary border-none text-center font-bold mx-auto py-3 px-10 rounded-lg"
                >
                  SEJA UM TIPPER!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
