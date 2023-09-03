import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  /** @title Upload your photo */
  picture?: DecoImage;
  /** @title Menu */
  links?: Array<Link>;
}

export default function Teste({
  picture,
  links,
}: Props) {
  return (
    <header class=" w-full bg-blue py-10 px-4 md:px-0">
      <section class="container mx-auto flex justify-between items-center bg-blue">
        <img
          class="block w-28 h-6"
          src={picture}
          alt={"logo"}
        />
        <nav class="hidden md:block ">
          {!!links?.length && (
            <ul class="flex justify-between gap-1">
              {links.map(({ href, title }) => (
                <a href={href} aria-label={title}>
                  <li class="text-gray mr-3">{title}</li>
                </a>
              ))}
            </ul>
          )}
        </nav>
        <nav class="flex items-center justify-between w-auto">
          <a
            href="#"
            class="text-gray bg-none border-green border-solid border-2 font-bold py-2 px-6 radio rounded-3xl mr-2 hidden w-auto md:flex items-center text-center"
          >
            DOWNLOAD
          </a>
          <a
            href="#"
            class="text-blue bg-green font-bold py-1 md:py-2 px-8 radio rounded-3xl md-0 md:ml-2 w-auto  md:flex items-center text-center"
          >
            CRIAR CONTA
          </a>
        </nav>
      </section>
    </header>
  );
}
