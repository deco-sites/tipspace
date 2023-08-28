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
    <div class="w-full bg-blue pb-8">
      <section class="container mx-auto flex justify-start items-center gap-5">
        <div class="w-1/4">
          <h2 class="font-FKScreamer font-black text-8xl text-green mb-5 uppercase">
            {title}
          </h2>
        </div>

        <div class="w-2/4">
          <p class="mb-3 text-xl text-gray">{text1}</p>
          <p class="mt-3 text-lg text-gray">{text2}</p>
        </div>
      </section>
      <div className="container">
        <h3 class="text-gray text-5xl text-center font-black my-8">
          QUER SABER MAIS? DÁ UMA OLHADA EM COMO É FÁCIL!
        </h3>
      </div>
    </div>
  );
}
