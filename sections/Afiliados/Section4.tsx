export interface Props {
  /** @title Title */
  title?: string;
  /** @title Text Box Left */
  textBoxLeft?: string;
  /** @title Title Right */
  titler?: string;
  /** @title Text Bottom */
  textb?: string;
}

export default function Section4({ title, textBoxLeft, titler, textb }: Props) {
  return (
    <div className="w-full bg-gray py-10 md:py-20 px-4 md:px-0">
      <section className="container md:py-14 py-7">
        <h2 class="font-black font-FKScreamer uppercase text-blue text-6xl md:text-8xl">
          {title}
        </h2>
      </section>
      <section className="contianer flex flex-col md:flex-row gap-10 justify-center items-center md:items-start">
        <div class="bg-blue p-5 rounded-3xl w-full md:w-4/12">
          <p class="text-green flex">
            {textBoxLeft}
          </p>
        </div>
        <div class=" w-full md:w-4/12">
          <div>
            <h3 class="font-black font-FKScreamer uppercase text-purple text-6xl md:text-8xl mb-3">
              {titler}
            </h3>
          </div>
          <div class="bg-purple p-5 rounded-3xl">
            <li class="text-gray font-bold">
              Valor fixo para cada usuário que jogar a 1ª partida.
            </li>
            <li class="text-gray font-bold">
              Comissões de até 40% na receitas do Tipspace.
            </li>
          </div>
        </div>
      </section>
      <section className="container mt-5">
        <p class="text-blue">{textb}</p>
      </section>
    </div>
  );
}
