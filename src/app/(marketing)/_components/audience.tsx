import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Audience() {
  return (
    <section className="pt-[69px] lg:pt-[108px]">
      <Container className="max-w-[1180px] px-4">
        <SectionHeading
          badge="Who uses Avcard?"
          title="Made For Today’s Digital Nigerians"
        />

        <div className="mt-[30px] flex flex-col gap-[30px] lg:relative lg:left-1/2 lg:mt-12 lg:-mb-[210.45px] lg:w-[1140px] lg:origin-top lg:-translate-x-1/2 lg:scale-85 xl:mb-0 xl:scale-100">
          <div className="flex flex-col gap-[30px] lg:gap-6">
            <div className="relative mx-[3.5px] flex flex-col items-center gap-5 overflow-hidden rounded-[20px] bg-[#edeaf6] px-5 py-[30px] lg:mx-0 lg:h-[352px] lg:bg-[#f8f0ff] lg:p-0 lg:shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)]">
              <AudienceCardContent
                icon="/icons/marketing/shoppers.svg"
                title="Online shoppers"
                body="Whether you're shopping for essentials or indulging in something special, Avcard gives you a fast, secure, and seamless virtual payment experience—so you can shop online with complete peace of mind"
                className="w-full gap-4 lg:absolute lg:top-[55px] lg:left-[603.5px] lg:w-[478px]"
              />
              <Image
                src="/images/marketing/online-shopper.png"
                alt="Woman holding shopping bags"
                width={1066}
                height={2121}
                sizes="308px"
                className="h-[612px] w-[307.59px] max-w-none object-cover lg:absolute lg:top-[3px] lg:left-[117.21px]"
              />
            </div>

            <div className="grid gap-[30px] lg:-mx-[3px] lg:grid-cols-2">
              <div
                className={cn(
                  "relative flex flex-col gap-[30px] overflow-hidden rounded-[20px] bg-linear-to-b from-[#fcdce2] to-[#fbb1bf] px-5 pt-[30px] shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)] lg:h-[673px] lg:p-0",
                )}
              >
                <AudienceCardContent
                  icon="/icons/marketing/gamers.svg"
                  title="Gamers and streamers"
                  body="Level up your gaming and streaming experience with Avcard—your secure, instant virtual card built for global access, smooth purchases, and total control."
                  className="lg:absolute lg:top-[54px] lg:left-[39px] lg:w-[478px]"
                />
                <Image
                  src="/images/marketing/gamer.png"
                  alt="Woman with pink hair holding a game controller"
                  width={447}
                  height={421}
                  sizes="447px"
                  className="mx-auto h-[421px] w-full max-w-[341px] object-cover lg:absolute lg:top-[252px] lg:left-[70px] lg:w-[447px] lg:max-w-none"
                />
              </div>

              <div
                className={cn(
                  "relative flex flex-col gap-2.5 overflow-hidden rounded-[20px] bg-linear-to-b from-[#fdd1a9] to-[#f3e0ce] px-5 pt-[30px] shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)] lg:h-[673px] lg:p-0",
                )}
              >
                <AudienceCardContent
                  icon="/icons/marketing/freelancers.svg"
                  title="Freelancers and remote workers."
                  body="Wherever you work, Avcard goes with you—empowering remote workers and freelancers with reliable virtual cards, seamless transactions, and total control over your finances."
                  className="lg:absolute lg:top-[54px] lg:left-[40px] lg:w-[478px]"
                />
                <Image
                  src="/images/marketing/freelancer.png"
                  alt="Smiling man in a hat carrying a bag"
                  width={447}
                  height={447}
                  sizes="447px"
                  className="mx-auto h-[447px] w-full max-w-[339px] object-cover lg:absolute lg:top-[268px] lg:left-[40px] lg:w-[447px] lg:max-w-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] lg:flex-row lg:items-start lg:gap-0">
            <div
              className={cn(
                "flex flex-col gap-4 rounded-[20px] bg-[#fdf4dc] px-[31px] py-16 shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)] lg:h-[324px] lg:w-[363px] lg:shrink-0",
              )}
            >
              <h3 className="w-[196px] text-[32px] leading-[38.4px] font-semibold">
                100%
                <br />
                Dedication
              </h3>
              <p className="w-[301px] text-base leading-[25.92px] capitalize">
                Experience a virtual card platform built with 100% dedication to
                your financial freedom, security, and convenience.
              </p>
            </div>

            <div className="relative h-[320px] shrink-0 overflow-hidden rounded-[20px] bg-[#e6fdbc] lg:mt-0.5 lg:ml-[30px] lg:w-[755px]">
              <Image
                src="/images/marketing/cart.png"
                alt="Shopping cart full of groceries"
                width={274}
                height={258}
                sizes="274px"
                className="absolute top-[62px] left-[1.01px] h-[258px] w-[138.27px] object-cover lg:left-0.5 lg:w-[274px]"
              />
              <div className="absolute right-0 bottom-0 h-[225px] w-[196px] rounded-tl-[28px] bg-white pt-3.5 pl-3.5 before:absolute before:-top-5 before:right-0 before:size-5 before:bg-[radial-gradient(circle_at_0_0,transparent_20px,white_20.5px)] after:absolute after:bottom-0 after:-left-5 after:size-5 after:bg-[radial-gradient(circle_at_0_0,transparent_20px,white_20.5px)] lg:w-[386px] lg:pt-[25px] lg:pl-[28px]">
                <Link
                  href="#"
                  className="relative flex h-[211px] w-[182px] items-center justify-center rounded-[18px] bg-purple-dark text-lg leading-[21.6px] font-normal text-white transition-colors [-webkit-text-stroke:2px_#fff] [paint-order:stroke_fill] hover:bg-[#5a1ea6] lg:h-[200px] lg:w-[353px] lg:text-2xl lg:leading-[28.8px]"
                >
                  Get Started
                  <Image
                    src="/icons/marketing/cursor-arrow.svg"
                    alt=""
                    width={59}
                    height={59}
                    className="absolute top-[108.78px] left-[105.78px] size-[58.44px] lg:top-[109.5px] lg:left-[273.62px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AudienceCardContent({
  icon,
  title,
  body,
  className,
}: {
  icon: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Image src={icon} alt="" width={42} height={42} />
      <h3 className="text-[32px] leading-[38.4px] font-semibold lg:w-[445px]">
        {title}
      </h3>
      <p className="text-base leading-[25.92px] capitalize">{body}</p>
    </div>
  );
}
