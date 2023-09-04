import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Image */
  imageBox1?: DecoImage;
  /** @title Title */
  title?: string;
  /** @title Text*/
  text?: string;
  /** @title Image Box 2 */
  imageBox2?: DecoImage;
  /** @title Title Box 3*/
  titleBox3?: string;
  /** @title Text Box 3 */
  textBox3?: string;
  /** @title Title Box 4 */
  titleBox4?: string;
  /** @title Image Box 4 */
  imageBox4?: DecoImage;
  /** @title Text Box 5 */
  textBox5?: string;
  /** @title Title Box 5 */
  titleBox5?: string;
  /** @title Image Box 5 */
  imageBox5?: DecoImage;
}
export default function Section3(
  {
    imageBox1,
    title,
    text,
    imageBox2,
    titleBox3,
    textBox3,
    titleBox4,
    imageBox4,
    titleBox5,
    textBox5,
    imageBox5,
  }: Props,
) {
  return (
    <div class="w-full bg-gray pb-8">
      <section class="container flex flex-wrap justify-between gap-5 pt-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 bg-green rounded-2xl pt-2 px-4 md:pt-8 md:px-12 w-full">
          <div class="w-full md:w-2/5">
            <h3 class="text-blue text-4xl md:text-6xl font-black font-FKScreamer py-5">
              {title}
            </h3>
            <p class="text-blue">
              {text}
            </p>
          </div>
          <div class="w-full md:w-3/5">
            <img src={imageBox1} alt="#" />
          </div>
        </div>
        <div class="rounded-xl p-0 smd:py-5 md:px-7 bg-none md:bg-purple w-fuull md:w-5/12">
          <img
            src={imageBox2}
            alt="2"
            class="flex justify-center items-center mx-auto"
          />
        </div>
        <div class="w-full md:w-6/12 gap-5 flex flex-col items-centers">
          <div class="bg-blue py-5 px-7 rounded-3xl ">
            <h3 class="text-gray text-4xl md:text-6xl font-FKScreamer font-black mb-4">
              {titleBox3}
            </h3>
            <p class="text-green">{textBox3}</p>
          </div>
          <div class="bg-purple pt-5 px-7 rounded-3xl w-full ">
            <h3 class="text-gray text-4xl md:text-6xl font-FKScreamer font-black mb-4">
              {titleBox4}
            </h3>
            <img src={imageBox4} alt="#" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between md:items-start py-5 px-10 bg-green rounded-3xl">
          <div class="w-full md:w-2/5">
            <h3 class="font-FKScreamer font-black text-4xl md:text-6xl text-blue mb-4">
              {titleBox5}
            </h3>
            <p class="text-blue">{textBox5}</p>
          </div>
          <div class="w-full md:w-2/5 mb-4">
            <img src={imageBox5} alt="#" class="mt-4 md:mt-0" />
          </div>
        </div>
      </section>
    </div>
  );
}
