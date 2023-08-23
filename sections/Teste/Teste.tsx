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
    <header class=" w-full bg-blue py-10">
      <section class="container mx-auto flex justify-between items-center bg-blue">
        <img
          class="block w-28 h-6"
          src={picture}
          alt={"logo"}
        />
        <nav>
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
        <nav>
          <a
            href="#"
            class="text-gray bg-none border-green border-solid border-2 font-bold py-1 px-6 radio rounded-3xl mr-2"
          >
            DOWNLOAD
          </a>
          <a
            href="#"
            class="text-blue bg-green font-bold py-1 px-8 radio rounded-3xl ml-2"
          >
            CRIAR CONTA
          </a>
        </nav>
      </section>
    </header>
  );
}
