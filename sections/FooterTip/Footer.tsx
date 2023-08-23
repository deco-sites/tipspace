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
      <div class="container flex justify-between items-center">
        <div>
          <img src={logo} alt="imagem da logo tipspace" />
        </div>
        <div class="flex flex-wrap justify-between px-12">
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
        <div class="flex justify-center items-center pr-12">
          {social?.map((item, index) => {
            return (
              <a href={item.link} target="_blank" class="mr-3" key={index}>
                <img src={item.img} alt="logo rede social" />
              </a>
            );
          })}
        </div>
        <div>
          <img src={disponivel} alt="logo" />
        </div>
      </div>
      <div className="w-full">
        <hr class="w-full bg-gray my-10" style={{ height: "2px" }} />
      </div>
      <div className="container">
        <p class="text-graysoft font-bold text-sm">
          Tipspace® - Tips Group LTDA - R. Card Arcoverde, 2365, Conj 33 -
          Parte. Pinheiros/ SP - CPNJ: 48.440/476/0001-70. Todos os direitos
          reservados.
        </p>
      </div>
    </section>
  );
}
