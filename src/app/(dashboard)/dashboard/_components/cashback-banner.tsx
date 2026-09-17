import Image from "next/image";
import { cn } from "@/lib/utils";

const dots = [false, true, false, false, false];

export function CashbackBanner({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("flex flex-col", className)} {...props}>
      <div className="relative isolate h-[106px] overflow-hidden rounded-lg bg-[#343435] px-[17px] pt-3.5 lg:h-[229px] lg:rounded-[20px] lg:rounded-br-[52px] lg:px-[18px] lg:pt-[54px] lg:shadow-[0_8px_20px_rgb(0_0_0/0.25)]">
        <Image
          src="/images/dashboard/cashback-banner-mobile.png"
          alt=""
          width={416}
          height={106}
          className="absolute inset-0 -z-10 size-full object-cover lg:hidden"
        />
        <Image
          src="/images/dashboard/cashback-shapes.svg"
          alt=""
          width={222}
          height={231}
          className="absolute top-0 -right-0.5 -z-10 hidden h-[231px] w-[222px] lg:block"
        />
        <Image
          src="/images/dashboard/cashback-man.png"
          alt=""
          width={169}
          height={172}
          className="absolute right-[-3px] -bottom-1.5 -z-10 h-[107px] w-[131px] lg:right-0.5 lg:-bottom-0.5 lg:h-[172px] lg:w-[169px]"
        />
        <h2 className="text-[19px] leading-[23px] font-semibold tracking-[0.57px] text-white lg:text-[28px] lg:leading-[34px] lg:tracking-[0.84px]">
          Cashback up to 60% ✨
        </h2>
        <p className="mt-1 text-xs leading-[15px] tracking-[0.36px] text-[#8f8f8f] lg:mt-2 lg:text-base lg:leading-5 lg:tracking-[0.48px]">
          Get rewards, gift &amp; cashback
        </p>
        <button
          type="button"
          className="mt-[9px] h-[27px] rounded-[10px] bg-[#fed7fd] px-[17px] text-xs leading-[14px] font-medium tracking-[0.36px] text-black lg:mt-[30px] lg:h-[37px] lg:px-6 lg:text-base lg:leading-[19px] lg:tracking-[0.48px]"
        >
          Get it now
        </button>
      </div>
      <div
        aria-hidden="true"
        className="hidden h-[35px] items-center justify-center gap-[17px] lg:flex"
      >
        {dots.map((active, index) => (
          <span
            key={index}
            className={cn(
              "size-[11px] rounded-full",
              active ? "bg-[#c1c1c1]" : "bg-[#efefef]",
            )}
          />
        ))}
      </div>
    </section>
  );
}
