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
    <div className="w-full bg-gray py-20">
      <section className="container py-14">
        <h2 class="font-black font-FKScreamer uppercase text-blue text-8xl">
          {title}
        </h2>
      </section>
      <section className="contianer flex gap-5 justify-center items-start">
        <div class="bg-blue p-5 rounded-3xl w-4/12">
          <p class="text-green">
            {textBoxLeft}
          </p>
        </div>
        <div class="w-4/12">
          <div>
            <h3 class="font-black font-FKScreamer uppercase text-purple text-8xl mb-3">
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
