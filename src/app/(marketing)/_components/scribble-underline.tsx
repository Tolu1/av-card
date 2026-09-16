import { cn } from "@/lib/utils";

const variants = {
  hero: {
    mobile: {
      src: "/images/marketing/scribble-underline-mobile.svg",
      width: 256,
      height: 12,
    },
    desktop: {
      src: "/images/marketing/scribble-underline.svg",
      width: 490,
      height: 12,
    },
  },
  newsletter: {
    mobile: {
      src: "/images/marketing/scribble-underline-newsletter.svg",
      width: 245,
      height: 11,
    },
    desktop: {
      src: "/images/marketing/scribble-underline-newsletter.svg",
      width: 245,
      height: 11,
    },
  },
} as const;

type ScribbleUnderlineProps = React.ComponentProps<"img"> & {
  variant?: keyof typeof variants;
};

export function ScribbleUnderline({
  variant = "hero",
  className,
  ...props
}: ScribbleUnderlineProps) {
  const { mobile, desktop } = variants[variant];

  if (mobile.src === desktop.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={desktop.src}
        alt=""
        width={desktop.width}
        height={desktop.height}
        className={className}
        {...props}
      />
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mobile.src}
        alt=""
        width={mobile.width}
        height={mobile.height}
        className={cn("block lg:hidden", className)}
        {...props}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={desktop.src}
        alt=""
        width={desktop.width}
        height={desktop.height}
        className={cn("hidden lg:block", className)}
        {...props}
      />
    </>
  );
}
