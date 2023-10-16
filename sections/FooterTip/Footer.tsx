import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Social {
  img: DecoImage;
  link: string;
}

export interface Menu {
  title: string;
  link: string;
}

export interface Props {
  /** @title Logo Footer */
  logo?: DecoImage;
  /** @title Social Links */
  social?: Array<Social>;
  /** @title Menu Items */
  menu?: Array<Menu>;
  /** @title Disponível para */
  disponivel?: DecoImage;
  /** @title Idade 18 */
  idade?: DecoImage;
}

export default function Footer(
  { logo, social, menu, disponivel, idade }: Props,
) {
  return (
    <section class="w-full bg-darkblue py-10">
      <div class="container flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 ">
        <div>
          <img src={logo} alt="imagem da logo tipspace" />
        </div>
        <div class="hidden md:flex flex-wrap justify-between px-12">
          {menu?.map((item, index) => {
            return (
              <a
                href={item.title}
                key={index}
                target="_blank"
                class="text-graysoft text-sm leading-6 inline-block w-3/6"
              >
                {item.title}
              </a>
            );
          })}
        </div>

        <div class="flex gap-8 justify-center items-center">
          <img src={idade} alt="logo" />
          <img src={disponivel} alt="logo" />
        </div>
      </div>
      <div className="w-full hidden md:block">
        <hr class="w-full bg-gray my-10" style={{ height: "2px" }} />
      </div>
      <div className="container flex justify-between">
        <p class="text-graysoft text-sm mt-5 md:mt-0 mx-auto">
          Tipspace® - Tips Group LTDA - R. Card Arcoverde, 2365, Conj 33 -
          Parte. Pinheiros/ SP - CPNJ: 48.440/476/0001-70. Todos os direitos
          reservados.
        </p>
        <div class="flex justify-center items-center md:pr-12 pr-0">
          <a
            target="blank"
            href="https://www.twitch.tv/tipspace"
            class="mr-3 last:mr-0"
          >
            <img
              src="/images/icon-social-twitch.svg"
              alt="Twitch da Tipspace"
            />
          </a>
          <a
            target="blank"
            href="https://discord.gg/tipspace"
            class="mr-3 last:mr-0"
          >
            <img
              src="/images/icon-social-discord.svg"
              alt="Discord da Tipspace"
            />
          </a>
          <a
            target="blank"
            href="https://instagram.com/tipspacebr"
            class="mr-3 last:mr-0"
          >
            <img
              src="/images/icon-social-instagram.svg"
              alt="Instagram da Tipspace"
            />
          </a>
          <a
            target="blank"
            href="https://twitter.com/tipspace"
            class="mr-3 last:mr-0"
          >
            <img
              src="/images/icon-social-twitter.svg"
              alt="Twitter da Tipspace"
            />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UC_V_ujeANFG3LjtHQZF9lLw"
            class="mr-3 last:mr-0"
          >
            <img
              src="/images/icon-social-youtube.svg"
              alt="Youtube da Tipspace"
            />
          </a>
          <a
            target="blank"
            href="https://www.tiktok.com/@tipspacebr/"
            class="mr-3 last:mr-0"
          >
            <img
              src="/images/icon-social-tiktok.svg"
              alt="Tiktok da Tipspace"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
