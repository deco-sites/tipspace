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
      <div className="container flex justify-between items-end gap-4 mb-10">
        <h3 class="text-9xl text-purple font-FKScreamer font-black inline-block w-3/6">
          {title}
        </h3>
        <div
          class="text-gray font-bold text-base w-3/6"
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </div>
      </div>
      <div className="container">
        <div class="carousel w-full">
          {videos?.map((item, index) => {
            return (
              <div id={`slider${index}`} class="carousel-item relative">
                <img
                  src={item}
                  key={index}
                  class="w-full"
                />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slider${(index - 1).toString()}`}
                    class="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slider${(index + 1).toString()}`}
                    class="btn btn-circle"
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
