import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Title */
  title?: string;
  /** @title Title box 1 */
  title1?: string;
  /** @title Text box 1*/
  text1?: string;
  /** @title Image box 2 */
  imageBox2?: DecoImage;
  /** @title Title box 3 */
  title3?: string;
  /** @title Image box 3 */
  imageBox3?: DecoImage;
  /** @title Image box 4 */
  imageBox4?: DecoImage;
  /** @title Title box 4 */
  title4?: string;
  /** @title Text box 4 */
  text4?: string;
  /** @title Image box 5 */
  imageBox5?: DecoImage;
  /** @title Title box 5 */
  title5?: string;
  /** @title Text box 5 */
  text5?: string;
}
export default function Section2(
  {
    title,
    title1,
    text1,
    imageBox2,
    title3,
    imageBox3,
    imageBox4,
    title4,
    text4,
    imageBox5,
    title5,
    text5,
  }: Props,
) {
  return (
    <div class="w-full bg-gray pb-8 pt-4 md:pt-0">
      <h2 class="text-center text-purple mb-10 font-FKScreamer font-black uppercase text-6xl md:text-7xl">
        {title}
      </h2>
      <section class="container flex flex-col md:flex-row items-center justify-center gap-5">
        <div class="w-full md:w-5/12 flex flex-col gap-5">
          <div class="py-10 px-12 bg-purple rounded-3xl">
            <h3 class="text-blue text-5xl mb-4 md:mb-0 md:text-6xl font-FKScreamer font-black">
              {title1}
            </h3>
            <p class="text-gray">{text1}</p>
          </div>
          <div class="py-10 px-12 bg-blue rounded-3xl">
            <h3 class="text-gray text-5xl mb-4 md:mb-0 md:text-6xl font-FKScreamer font-black">
              {title3}
            </h3>
            <img src={imageBox3} alt="" />
          </div>
        </div>
        <div class="w-full md:w-6/12 flex flex-col gap-5">
          <div class="py-10 px-12 bg-blue rounded-3xl">
            <img src={imageBox2} alt="" />
          </div>
          <div class="bg-purple py-10 px-12 rounded-3xl">
            <h3 class="text-blue text-5xl mb-4 md:mb-0 md:text-6xl font-FKScreamer font-black">
              {title4}
            </h3>
            <p class="mb-5 text-gray">{text4}</p>
            <img src={imageBox4} alt="" />
          </div>
        </div>
      </section>
      <div className="container flex justify-between flex-wrap bg-green rounded-3xl px-12 mt-5">
        <div class="py-10 w-full md:w-4/12 ">
          <h3 class="text-blue text-5xl mb-4 md:mb-0 md:text-6xl font-FKScreamer font-black">
            {title5}
          </h3>
          <p class="text-blue">{text5}</p>
        </div>
        <div class="w-full md:w-5/12">
          <img src={imageBox5} alt="#" class="h-full w-auto" />
        </div>
      </div>
    </div>
  );
}
