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
    <section class="w-full bg-blue pb-12 px-4 md:px-0">
      <div className="container mb-8">
        <div className="w-full bg-[url('/image/bg-sec-2-home.png')] bg-center bg-no-repeat bg-contain h-96 relative hidden md:block">
          <h3 class="absolute 2xl:left-20 top-24 left-12 text-6xl text-green uppercase w-72 font-FKScreamer font-black">
            {headline}
          </h3>
        </div>
        <div className="w-full block md:hidden">
          <img src="/image/bg.png" alt="" />
          <h3 class="font-FKScreamer font-black text-green text-4xl text-center mt-4">
            {headline}
          </h3>
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 pt-6">
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
