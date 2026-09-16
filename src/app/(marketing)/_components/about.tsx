import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const brands = [
  { src: "/images/logos/zara-dark.svg", alt: "Zara" },
  { src: "/images/logos/spotify-dark.svg", alt: "Spotify" },
  { src: "/images/logos/apple-dark.svg", alt: "Apple" },
  { src: "/images/logos/temu.png", alt: "Temu", padded: true },
  { src: "/images/logos/netflix-dark.svg", alt: "Netflix" },
  { src: "/images/logos/amazon-dark.svg", alt: "Amazon" },
];

const highlights = [
  {
    icon: "/icons/marketing/transfer.png",
    label: "You fund and spend in naira",
  },
  { icon: "/icons/marketing/credit-card.png", label: "Instant Card Creation" },
  { icon: "/icons/marketing/wallet.png", label: "Easy Card Management" },
];

export function About() {
  return (
    <section className="pt-[85px] lg:pt-[61px]">
      <Container className="h-[1651px] lg:h-auto">
        <SectionHeading badge="About Us" title="What Is AvCard?" />

        <div className="relative mt-[62px] flex flex-col lg:left-1/2 lg:-mb-[185.75px] lg:h-[743px] lg:w-[1223.28px] lg:origin-top lg:-translate-x-1/2 lg:scale-75 xl:-mb-[37.15px] xl:scale-95 min-[84rem]:mb-0 min-[84rem]:scale-100">
          <div className="relative isolate mx-auto flex h-[624px] w-full flex-col gap-5 overflow-hidden rounded-[40px] bg-[#1c1a50] px-[30px] pt-[60px] lg:absolute lg:top-[57px] lg:left-0 lg:mx-0 lg:h-[629px] lg:w-[673px] lg:max-w-none lg:rounded-[30px] lg:px-12 lg:pt-[125px]">
            <div className="absolute top-[152.96px] -left-[186.01px] -z-10 hidden h-[690.69px] w-[481.79px] rounded-full bg-linear-[177deg] from-[#423ee0] to-[#812de2] blur-[300px] lg:block" />
            <Image
              src="/images/logos/av-card.png"
              alt=""
              width={1361}
              height={512}
              className="absolute top-[481.89px] left-[50.86px] -z-10 w-[274.86px] max-w-none opacity-30 lg:top-[230.86px] lg:left-[376.15px] lg:w-[349px] lg:rotate-90 lg:opacity-100"
            />
            <div className="flex flex-col gap-[30px] lg:gap-7">
              <div className="flex flex-col gap-7 lg:h-[204px]">
                <h3 className="h-[27px] text-[30px] leading-[30px] font-bold text-white">
                  About Us
                </h3>
                <p className="text-xl leading-[32.4px] text-white lg:w-[430px]">
                  We are a prepaid virtual card service that lets you create
                  virtual cards that you can use to make online payments
                  anywhere Mastercard is accepted, but with one big difference
                </p>
              </div>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "relative h-[54px] w-[209px] text-base leading-6 text-white shadow-none before:pointer-events-none before:absolute before:-inset-px before:rounded-[11px] before:bg-linear-to-r before:from-[#5a43af] before:to-[#7f6dc1] before:p-px before:[mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)] hover:bg-white/10 hover:text-white",
                )}
              >
                Get Your Card Now
              </Link>
            </div>
            <ul className="flex h-[50px] items-center gap-[9px] lg:absolute lg:top-[508px] lg:left-[55px] lg:h-auto lg:gap-2.5">
              {brands.map((brand) => (
                <li
                  key={brand.alt}
                  className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-[#1c1a50] lg:size-[94px]"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={94}
                    height={94}
                    className={cn(
                      "size-full",
                      brand.padded && "size-1/2 rounded-md object-contain",
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto -mt-5 w-full max-w-[368px] lg:absolute lg:top-0 lg:left-[623px] lg:mx-0 lg:mt-0">
            <Image
              src="/images/marketing/phone-dashboard.png"
              alt="AV Card dashboard on a phone"
              width={793}
              height={1600}
              sizes="368px"
              className="w-full"
            />
            <ul className="absolute top-[616.93px] left-1/2 flex w-[calc(100%+11px)] max-w-[379px] -translate-x-1/2 flex-col gap-[17px] lg:top-[446.87px] lg:left-[250.28px] lg:w-[390px] lg:max-w-none lg:translate-x-0">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex h-16 items-center gap-2.5 rounded-[10px] bg-white px-5 shadow-[0_0_0_1px_rgb(97_4_192/0.1),0_4px_14px_rgba(0,0,0,0.07)]"
                >
                  <Image src={item.icon} alt="" width={30} height={30} />
                  <span className="text-base leading-[18.24px] font-semibold tracking-[0.64px] text-[#1c1c1c]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
