import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Container } from "./container";

const features = [
  "Accepted globally — anywhere Mastercard is used",
  "Easy funding from your naira wallet or bank",
  "Real-time spending notifications",
  "No foreign transaction fees",
  "24/7 support and dispute resolution",
  "Card freezing and unfreezing in one tap",
  "Built-in spending controls and limits",
  "Instant virtual card issuance",
];

export function Features() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f6f6] pt-[86px] lg:mt-[94px] lg:py-[109px]">
      <Image
        src="/images/marketing/gradient-bg.png"
        alt=""
        width={1897}
        height={901}
        className="absolute top-[11px] left-0 -z-10 h-[1138px] w-full max-w-none rounded-b-[16px] object-cover blur-[200px] lg:top-[139px] lg:-left-[179px] lg:h-[901px] lg:w-[1897px]"
      />
      <Container className="px-4">
        <div className="lg:mx-auto lg:grid lg:max-w-[1139px] lg:grid-cols-[minmax(0,498px)_588px] lg:items-end lg:justify-between lg:gap-[53px] xl:relative xl:left-[7.5px]">
          <div>
            <Badge variant="section">About Us</Badge>
            <h2 className="mt-5 text-[36px] leading-[43.88px] font-bold capitalize">
              All the features
              <br />
              in one app
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="relative pl-7 text-lg leading-[27px] capitalize before:absolute before:top-3 before:left-2 before:size-[3px] before:rounded-full before:bg-foreground lg:max-w-[484px]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative -mx-4 mt-[57px] h-[421px] overflow-hidden rounded-[20px] bg-[#f8f0ff] shadow-[0_0_0_1px_rgb(164_151_211/0.32)] sm:mx-0 lg:mx-0 lg:mt-0 lg:h-[555px]">
            <Image
              src="/images/marketing/phone-kyc.png"
              alt="KYC verification screen"
              width={251}
              height={612}
              sizes="(min-width: 1024px) 251px, 183px"
              className="absolute -top-[222px] right-[11px] h-[447px] w-[183px] lg:-top-[249px] lg:right-auto lg:left-[307px] lg:h-[612px] lg:w-[251px]"
            />
            <Image
              src="/images/marketing/phone-home.png"
              alt="AV Card home screen"
              width={260}
              height={460}
              sizes="(min-width: 1024px) 260px, 190px"
              className="absolute top-[85px] left-[15px] h-[336px] w-[190px] lg:top-[156px] lg:left-[30px] lg:h-[460px] lg:w-[260px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
