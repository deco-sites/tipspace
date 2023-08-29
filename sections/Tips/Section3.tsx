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
      <section class="container flex flex-wrap justify-between gap-5">
        <div className="flex bg-green rounded-2xl pt-8 px-12 w-full">
          <div class="w-2/5">
            <h3 class="text-blue text-6xl font-black font-FKScreamer py-5">
              {title}
            </h3>
            <p class="text-blue">
              {text}
            </p>
          </div>
          <div class="w-3/5">
            <img src={imageBox1} alt="#" />
          </div>
        </div>
        <div class="rounded-xl py-5 px-7 bg-purple w-5/12">
          <img
            src={imageBox2}
            alt="#"
            class="flex justify-center items-center "
          />
        </div>
        <div class="w-6/12 gap-5 flex flex-col">
          <div class="bg-blue py-5 px-7 rounded-3xl ">
            <h3 class="text-gray text-6xl font-FKScreamer font-black mb-4">
              {titleBox3}
            </h3>
            <p class="text-green">{textBox3}</p>
          </div>
          <div class="bg-purple pt-5 px-7 rounded-3xl ">
            <h3 class="text-gray text-6xl font-FKScreamer font-black mb-4">
              {titleBox4}
            </h3>
            <img src={imageBox4} alt="#" />
          </div>
        </div>
        <div className="w-full flex justify-between items-start py-5 px-10 bg-green rounded-3xl">
          <div class="w-2/5">
            <h3 class="font-FKScreamer font-black text-6xl text-blue mb-4">
              {titleBox5}
            </h3>
            <p class="text-blue">{textBox5}</p>
          </div>
          <div class="w-2/5 mb-4">
            <img src={imageBox5} alt="#" />
          </div>
        </div>
      </section>
    </div>
  );
}
