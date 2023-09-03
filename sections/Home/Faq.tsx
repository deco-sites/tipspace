export interface AccordionItem {
  title: string;
  content: string;
}

export interface Props {
  /** @title Heading */
  heading?: string;
  /** @title Accordion */
  accordion?: Array<AccordionItem>;
}

export default function Faq({ accordion, heading }: Props) {
  return (
    <section class="w-full bg-blue py-20 px-4 md:px-0">
      <div class="container">
        <h2 class="text-gray font-black text-4xl md:text-5xl mb-6">
          {heading}
        </h2>
        <div>
          {accordion?.map(({ title, content }) => {
            return (
              <div class="collapse collapse-arrow bg-lightgreen md:bg-blue mb-4">
                <input
                  type="radio"
                  name="my-accordion-2"
                  checked={true}
                />
                <div class="collapse-title">
                  <h3 class="text-gray text-3xl font-DMSans font-bold">
                    {title}
                  </h3>
                </div>
                <div class="collapse-content bg-gray md:bg-transparent rounded-2xl pl-5">
                  <p class="text-blue md:text-purple text-xl font-normal  py-10 md:pt-2 rounded-2xl bg-gray md:bg-transparent ">
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
