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
    <section class="w-full bg-blue py-20">
      <div class="container">
        <h2 class="text-gray font-black text-5xl mb-6">{heading}</h2>
        <div>
          {accordion?.map(({ title, content }) => {
            return (
              <div class="collapse collapse-arrow bg-blue pb-4">
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
                <div class="collapse-content">
                  <p class="text-purple text-xl font-normal pl-5">
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
