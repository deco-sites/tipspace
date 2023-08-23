export interface Props {
  /** @title Title */
  headline?: string;
  /** @title Text 1 */
  text1?: string;
  /** @title Text 2 */
  text2?: string;
}

export default function Section2({ headline, text1, text2 }: Props) {
  return (
    <section class="w-full bg-blue pb-12">
      <div className="container mb-8">
        <div className="w-full bg-[url('/image/bg-sec-2-home.png')] bg-center bg-no-repeat bg-contain h-96 relative">
          <h3 class="absolute top-24   left-12 text-6xl text-green uppercase w-72 font-FKScreamer font-black">
            {headline}
          </h3>
        </div>
      </div>
      <div className="container flex justify-between gap-3 pt-6">
        <p class="text-gray text-base">
          {text1}
        </p>
        <p class="text-purple font-bold text-xl">
          {text2}
        </p>
      </div>
    </section>
  );
}
