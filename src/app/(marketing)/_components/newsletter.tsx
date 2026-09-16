import Image from "next/image";
import { Container } from "./container";
import { NewsletterForm } from "./newsletter-form";
import { ScribbleUnderline } from "./scribble-underline";

export function Newsletter() {
  return (
    <section className="relative isolate h-[757px] overflow-hidden bg-[#f6f6f6] pt-[84px] lg:h-[438px]">
      <Image
        src="/images/marketing/gradient-bg.png"
        alt=""
        width={1897}
        height={901}
        className="absolute top-[131px] -left-[65px] -z-10 h-[577px] w-[443px] max-w-none rounded-b-[16px] object-cover blur-[200px] lg:-top-[29px] lg:-left-[164px] lg:h-[901px] lg:w-[1897px]"
      />
      <Container className="flex flex-col gap-[50px] lg:grid lg:max-w-[1205px] lg:grid-cols-[minmax(0,643px)_472px] lg:items-center lg:gap-x-[50px]">
        <div className="relative pb-1">
          <p className="text-2xl leading-[60px] font-bold tracking-[-0.72px] text-purple">
            Subscribe
          </p>
          <h2 className="text-[55px] leading-[67.04px] font-bold tracking-[-1.65px]">
            Stay informed never{" "}
            <span className="relative inline-block">
              miss
              <ScribbleUnderline
                variant="newsletter"
                className="pointer-events-none absolute top-[60px] left-0 hidden max-w-none lg:block"
              />
            </span>{" "}
            <span className="whitespace-nowrap lg:whitespace-normal">
              <span className="relative inline-block">
                an
                <ScribbleUnderline
                  variant="newsletter"
                  className="pointer-events-none absolute top-[60px] left-0 max-w-none lg:hidden"
                />
              </span>{" "}
              update!
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base leading-7">
            Stay ahead of the curve with the latest news, feature releases,
            security tips, and exclusive offers from Avcard—delivered straight
            to your inbox so you never miss a beat.
          </p>
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}
