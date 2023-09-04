export interface Props {
  /** @title Title */
  title?: string;
  /** @title Text 1 */
  text1?: string;
  /** @title Text 2 */
  text2?: string;
}
export default function Section2({ text1, text2, title }: Props) {
  return (
    <div class="w-full bg-blue pb-8 px-4 md:px-0">
      <section class="container mx-auto flex flex-col md:flex-row justify-start items-center gap-5">
        <div class="w-10/12 md:w-4/12">
          <h2 class="font-FKScreamer font-black text-6xl md:text-7xl text-green mb-5 uppercase">
            {title}
          </h2>
        </div>

        <div class="w-10/12 md:w-4/12">
          <p class="mb-3 text-xl text-gray">{text1}</p>
          <p class="mt-3 text-lg text-gray">{text2}</p>
        </div>
      </section>
      <div className="container">
        <h3 class="text-gray text-3xl md:text-5xl text-center font-black my-8">
          QUER SABER MAIS? DÁ UMA OLHADA EM COMO É FÁCIL!
        </h3>
      </div>
    </div>
  );
}
