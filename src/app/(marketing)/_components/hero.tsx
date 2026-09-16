import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navbar } from "./navbar";
import { ScribbleUnderline } from "./scribble-underline";

export function Hero() {
  return (
    <section className="@container relative isolate overflow-hidden rounded-b-[24px] pt-7 lg:mx-6 lg:mt-6 lg:h-[700px] lg:rounded-[24px] lg:pt-0">
      <HeroBackground />

      <div className="mx-auto w-full max-w-[1210px] lg:flex lg:h-full lg:flex-col lg:px-5">
        <Navbar />

        <div className="grid grid-cols-1 px-6 sm:px-16 lg:flex-1 lg:grid-cols-2 lg:px-0 xl:grid-cols-[638px_1fr]">
          <div className="flex flex-col gap-7 pt-20">
            <div className="relative flex flex-col gap-3 pt-10 lg:pt-0">
              <div>
                <p className="text-base leading-6 font-semibold text-primary">
                  EASY PAYMENT
                </p>
                <h1 className="text-[47px] leading-[56px] font-bold lg:text-[52px] lg:leading-[1.2] xl:text-[64px] xl:leading-[77px]">
                  Pay Like a Pro.
                  <br />
                  No Plastic Needed.
                </h1>
              </div>
              <p className="text-lg leading-[27px] lg:max-w-[490px]">
                Create virtual naira cards that work anywhere, globally or
                locally without the dollar card drama.
              </p>
              <ScribbleUnderline className="pointer-events-none absolute top-[114.84px] left-[108px] lg:top-[80px] lg:left-[104px] lg:h-auto lg:w-[398px] xl:top-[93px] xl:left-[128px] xl:w-[490px]" />
            </div>
            <Link
              href="#"
              className={cn(buttonVariants({ size: "lg" }), "w-[209px]")}
            >
              Get Your Card Now
            </Link>
          </div>

          <div className="relative -mx-6 flex justify-center lg:mx-0 lg:mt-0">
            <HeroImage className="h-[483px] w-[462px] max-w-none shrink-0 object-cover lg:absolute lg:-right-[8.23px] lg:-bottom-[17.88px] lg:h-[529.75px] lg:w-[500.91px] xl:-top-[29.16px] xl:right-[max(-96.51px,599.49px_-_50cqw)] xl:bottom-auto xl:h-[652px] xl:w-[616.51px]" />
            <PlatformsCard className="absolute bottom-[18px] left-1/2 w-[292px] -translate-x-[141px] lg:right-[13.31px] lg:bottom-[86.94px] lg:left-auto lg:translate-x-0 xl:right-[max(-70px,626px_-_50cqw)] xl:bottom-[107px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

const platforms = [
  { src: "/images/logos/netflix.svg", alt: "Netflix" },
  { src: "/images/logos/spotify.svg", alt: "Spotify" },
  { src: "/images/logos/prime-video.svg", alt: "Prime Video" },
];

function PlatformsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-[13px] rounded-[8px] bg-white px-4 py-2.5 shadow-[0_4px_54px_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      <div className="flex shrink-0 items-center -space-x-3">
        {platforms.map((p) => (
          <span
            key={p.alt}
            className="size-10 overflow-hidden rounded-full bg-white shadow-[0_0_0_2px_white]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={40}
              height={40}
              className="size-full"
            />
          </span>
        ))}
      </div>
      <p className="text-xs leading-4">
        Shop, stream, subscribe, &amp; pay online across the world with your own
        virtual naira card.
      </p>
    </div>
  );
}

function HeroImage({ className }: { className?: string }) {
  const common = {
    alt: "Smiling man paying with his phone",
    fetchPriority: "high" as const,
  };
  const {
    props: { srcSet: desktop, sizes: desktopSizes },
  } = getImageProps({
    ...common,
    src: "/images/marketing/hero-man.png",
    width: 617,
    height: 630,
    sizes: "(min-width: 1280px) 617px, 501px",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/marketing/hero-man-mobile.png",
    width: 462,
    height: 483,
    sizes: "462px",
  });

  return (
    <picture className="contents">
      <source
        media="(min-width: 1024px)"
        srcSet={desktop}
        sizes={desktopSizes}
      />
      <source srcSet={mobile} />
      <img {...rest} alt={common.alt} className={className} />
    </picture>
  );
}

function HeroBackground() {
  const common = { alt: "", sizes: "100vw", fetchPriority: "high" as const };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/images/marketing/hero-bg.png",
    width: 1392,
    height: 700,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/marketing/hero-bg-mobile.png",
    width: 412,
    height: 986,
  });

  return (
    <picture className="contents">
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img
        {...rest}
        alt=""
        className="absolute inset-x-0 top-7 -z-10 h-[calc(100%-28px)] w-full object-cover object-bottom lg:top-0 lg:h-full lg:object-center"
      />
    </picture>
  );
}
