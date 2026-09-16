import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Leaf } from "./leaf";
import { SectionHeading } from "./section-heading";

const rows = [
  [
    {
      title: "International Payments in Naira",
      body: "Make international payments on platforms like Netflix, Amazon, and so many others.",
      bullet: "/icons/marketing/bullet-blue.svg",
      textClassName: "",
      bodyClassName: "lg:w-0 lg:min-w-full",
    },
    {
      title: "Shop and Pay Locally",
      body: "Use your virtual card for everyday Nigerian apps and platforms - food delivery, rides, bills, shopping.",
      bullet: "/icons/marketing/bullet-red.svg",
      textClassName: "",
      bodyClassName: "lg:w-[300px] lg:max-w-full",
    },
    {
      title: "No Crazy Maintenance Fees",
      body: "We don’t charge you for just existing. Transparent & affordable pricing, always.",
      bullet: "/icons/marketing/bullet-green.svg",
      textClassName: "",
      bodyClassName: "lg:w-[300px] lg:max-w-full",
    },
  ],
  [
    {
      title: "Fast, Easy Setup",
      body: "Get your virtual card in under 2 minutes. No paperwork, no waiting in lines.",
      bullet: "/icons/marketing/bullet-teal.svg",
      textClassName: "lg:w-[340px] lg:max-w-full",
      bodyClassName: "lg:w-[300px] lg:max-w-full",
    },
    {
      title: "End-to-end encryption",
      body: "By encryption, protecting your data from unauthorized access.",
      bullet: "/icons/marketing/bullet-orange.svg",
      textClassName: "",
      bodyClassName: "lg:w-[300px] lg:max-w-full",
    },
    {
      title: "Secure & Reliable",
      body: "Backed by Mastercard’s global security network. Your money is safe and your transactions are protected.",
      bullet: "/icons/marketing/bullet-purple.svg",
      textClassName: "",
      bodyClassName: "lg:w-[300px] lg:max-w-full",
    },
  ],
];

export function Benefits() {
  return (
    <section className="relative pt-7 lg:pt-[90px]">
      <Leaf
        side="left"
        className="-top-[61px] -left-[25px] z-10 lg:top-[129px] lg:-left-[94px]"
      />
      <Leaf
        side="right"
        className="top-[1590px] -right-[30px] lg:top-[638px] lg:-right-[111px]"
      />

      <Container>
        <SectionHeading badge="Our Benefits" title="Why You Will Love It" />
        <p className="-mx-[5px] mt-3 text-center text-lg leading-[27px] lg:mx-auto lg:max-w-[792px]">
          From instant cards to bulletproof security, here’s what makes Avcard a
          game-changer
        </p>

        <div className="relative isolate -mx-7 mt-12 flex flex-col gap-3 overflow-hidden rounded-[16px] bg-[#f6f6f6] px-6 py-10 sm:mx-0 lg:mx-auto lg:min-h-[502px] lg:w-[min(100%,calc(100vw-270px))] lg:gap-12">
          <Image
            src="/images/marketing/gradient-bg.png"
            alt=""
            width={1232}
            height={901}
            className="absolute -top-[110px] -right-[373px] -z-10 h-[1514px] w-[433px] max-w-none rounded-b-[16px] object-cover blur-[200px] lg:top-[11px] lg:right-auto lg:left-0 lg:h-[901px] lg:w-[1232px]"
          />
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="contents">
              {rowIndex > 0 && (
                <Separator className="-mb-px bg-linear-to-r from-[#f5f5f5] via-[#cbcbcb] via-45% to-[#f5f5f5] lg:mt-4 lg:mb-0 lg:hidden lg:bg-linear-to-b lg:data-horizontal:h-[148px] lg:data-horizontal:w-px" />
              )}
              <ul className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
                {row.map((benefit, i) => (
                  <li key={benefit.title} className="contents">
                    {i > 0 && (
                      <Separator className="-mb-px bg-linear-to-r from-[#f5f5f5] via-[#cbcbcb] via-45% to-[#f5f5f5] lg:mt-4 lg:mb-0 lg:bg-linear-to-b lg:data-horizontal:h-[148px] lg:data-horizontal:w-px" />
                    )}
                    <div
                      className={cn(
                        "flex flex-col gap-6 px-6 lg:min-w-0",
                        rowIndex === 1 && i === 2
                          ? "min-h-[194px]"
                          : "min-h-[180px]",
                      )}
                    >
                      <Image
                        src={benefit.bullet}
                        alt=""
                        width={28}
                        height={28}
                      />
                      <div
                        className={cn(
                          "flex flex-col gap-2",
                          benefit.textClassName,
                        )}
                      >
                        <h3 className="text-xl leading-6 font-bold whitespace-nowrap lg:whitespace-normal">
                          {benefit.title}
                        </h3>
                        <p
                          className={cn(
                            "text-base leading-6",
                            benefit.bodyClassName,
                          )}
                        >
                          {benefit.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
