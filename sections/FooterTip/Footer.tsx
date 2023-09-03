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
}

export default function Footer({ logo, social, menu, disponivel }: Props) {
  return (
    <section class="w-full bg-lightgreen py-10">
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
                class="text-graysoft font-bold inline-block w-3/6"
              >
                {item.title}
              </a>
            );
          })}
        </div>
        <div class="flex justify-center items-center md:pr-12 pr-0">
          {social?.map((item, index) => {
            return (
              <a
                href={item.link}
                target="_blank"
                class="mr-3 last:mr-0"
                key={index}
              >
                <img src={item.img} alt="logo rede social" />
              </a>
            );
          })}
        </div>
        <div class="hidden md:block">
          <img src={disponivel} alt="logo" />
        </div>
      </div>
      <div className="w-full hidden md:block">
        <hr class="w-full bg-gray my-10" style={{ height: "2px" }} />
      </div>
      <div className="container">
        <p class="text-graysoft font-bold text-sm mt-5 md:mt-0 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl text-center mx-auto">
          Tipspace® - Tips Group LTDA - R. Card Arcoverde, 2365, Conj 33 -
          Parte. Pinheiros/ SP - CPNJ: 48.440/476/0001-70. Todos os direitos
          reservados.
        </p>
      </div>
    </section>
  );
}
