import { HTML } from "deco-sites/std/components/types.ts";
import type { Image as DecoVideo } from "deco-sites/std/components/types.ts";

export interface Video {
  video?: DecoVideo;
}

export interface Props {
  /** @title Title */
  title: string;
  /** @title Text */
  text: HTML;
  /** @title Videos */
  videos?: Array<DecoVideo>;
}

export default function Tip({ title, text, videos }: Props) {
  return (
    <section class="bg-blue pt-20">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10">
        <img src="image/tipemtip.png" alt="" />
        <div
          class="text-gray mt-4 md:mt-0 text-xl w-full md:w-3/6 text-center md:text-left"
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </div>
      </div>
      <div className="container">
        <div class="carousel w-full">
          {videos?.map((item, index) => {
            return (
              <div id={`slider${index}`} class="carousel-item relative w-full">
                <img
                  src={item}
                  key={index}
                  class="w-full"
                />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slider${(index - 1).toString()}`}
                    class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl mr-1 flex justify-center items-center"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slider${(index + 1).toString()}`}
                    class="bg-purple text-blue font-black font-DMSans cursor-pointer p-1 rounded text-xl mr-1 flex justify-center items-center"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
