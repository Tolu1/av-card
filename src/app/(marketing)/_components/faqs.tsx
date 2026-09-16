import { CirclePlus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Leaf } from "./leaf";
import { SectionHeading } from "./section-heading";

const faqs = [
  {
    question: "What is Avcard & how does it work?",
    answer:
      "Avcard is a prepaid virtual Mastercard you fund in naira. Sign up, verify your account, create a card in under 2 minutes, fund it from your naira wallet or bank, and use it anywhere Mastercard is accepted online.",
  },
  {
    question: "Is Avcard available globally?",
    answer:
      "Yes. Your Avcard works on international platforms like Netflix, Amazon, Spotify and Apple, as well as local Nigerian apps — anywhere Mastercard is accepted online.",
  },
  {
    question: "Where can I use my Avcard?",
    answer:
      "Use it for subscriptions, online shopping, gaming, ride-hailing, food delivery, bills and any other online payment that accepts Mastercard.",
  },
  {
    question: "Can I create multiple virtual cards?",
    answer:
      "Yes. You can create more than one card and manage each separately — for example, one for subscriptions and another for shopping.",
  },
  {
    question: "Are there limits on how much I can spend with my virtual card?",
    answer:
      "Spending limits depend on your account tier. Completing higher KYC tiers raises your limits, and you can set your own spending controls in the app.",
  },
  {
    question: "How do I fund my Avcard?",
    answer:
      "Fund your card from your naira wallet or by bank transfer in the app. Your balance is available to spend instantly.",
  },
];

export function Faqs() {
  return (
    <section className="relative pt-[191px] pb-[152px] lg:pt-[132px] lg:pb-[99px]">
      <Leaf
        side="left"
        className="top-[74px] -left-[37px] -z-10 lg:-top-[72px] lg:-left-[139px]"
      />
      <Leaf
        side="right"
        className="top-[113px] -right-[30px] -z-10 lg:top-2.5 lg:-right-[151px]"
      />

      <Container>
        <SectionHeading
          badge="FAQ"
          className="gap-[5px]"
          title={
            <>
              Curious About Something?
              <br />
              Let’s Clear It Up
            </>
          }
        />

        <Accordion
          multiple
          className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[33px]"
        >
          {[0, 1, 2].map((c) => (
            <div
              key={c}
              className="contents lg:flex lg:flex-1 lg:flex-col lg:gap-6"
            >
              {faqs.map(
                (faq, i) =>
                  i % 3 === c && (
                    <AccordionItem
                      key={faq.question}
                      value={i}
                      style={{ order: i }}
                      className={cn(
                        "relative rounded-[24px] px-6 shadow-[inset_0_0_0_1px_var(--color-purple)] transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] not-last:border-b-0 [&_[data-slot=accordion-content]]:-mt-8 [&_[data-slot=accordion-content]]:transition-[height,margin] [&_[data-slot=accordion-content]]:duration-300 [&_[data-slot=accordion-content]]:ease-[cubic-bezier(0.22,1,0.36,1)] [&_[data-slot=accordion-content]]:data-ending-style:mt-0 [&_[data-slot=accordion-content]]:data-starting-style:mt-0",
                        i === 1 &&
                          "shadow-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[24px] before:bg-[radial-gradient(circle_285px_at_center,var(--color-purple),#fcdce2)] before:p-px before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.22,1,0.36,1)] before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] data-open:before:opacity-0",
                        i === 3 && "shadow-[inset_0_0_0_1px_#812de2]",
                        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[24px] after:bg-[radial-gradient(circle_468px_at_20.57%_29.27%,var(--color-purple),#fcdce2)] after:p-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] after:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] data-open:shadow-[inset_0_0_0_1px_transparent] data-open:after:opacity-100",
                      )}
                    >
                      <AccordionTrigger className="h-[158px] cursor-pointer items-center py-0 text-lg leading-[22px] font-semibold text-foreground hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                        <span className="flex w-full items-start justify-between gap-1">
                          <span className="max-w-[284px] flex-1">
                            {faq.question}
                          </span>
                          <CirclePlus
                            strokeWidth={1.5}
                            className="size-8 shrink-0 text-[#1c1c1c] [&_path:last-child]:origin-center [&_path:last-child]:transition-[rotate] [&_path:last-child]:duration-300 [&_path:last-child]:ease-[cubic-bezier(0.22,1,0.36,1)] [&_path:last-child]:[transform-box:fill-box] group-aria-expanded/accordion-trigger:[&_path:last-child]:rotate-90"
                          />
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-12 text-base leading-[25.92px] transition-opacity delay-75 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] in-data-ending-style:opacity-0 in-data-ending-style:delay-0 starting:opacity-0">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ),
              )}
            </div>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
