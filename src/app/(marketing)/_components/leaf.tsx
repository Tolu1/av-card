import { cn } from "@/lib/utils";

const variants = {
  left: {
    mobile: {
      src: "/images/marketing/leaf-left-mobile.svg",
      width: 91,
      height: 313,
    },
    desktop: {
      src: "/images/marketing/leaf-left.svg",
      width: 225,
      height: 449,
    },
  },
  right: {
    mobile: {
      src: "/images/marketing/leaf-right-mobile.svg",
      width: 85,
      height: 277,
    },
    desktop: {
      src: "/images/marketing/leaf-right.svg",
      width: 225,
      height: 426,
    },
  },
} as const;

type LeafProps = React.ComponentProps<"img"> & {
  side: keyof typeof variants;
};

export function Leaf({ side, className, ...props }: LeafProps) {
  const { mobile, desktop } = variants[side];
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mobile.src}
        alt=""
        width={mobile.width}
        height={mobile.height}
        className={cn(
          "pointer-events-none absolute block select-none lg:hidden",
          className,
        )}
        {...props}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={desktop.src}
        alt=""
        width={desktop.width}
        height={desktop.height}
        className={cn(
          "pointer-events-none absolute hidden select-none lg:block",
          className,
        )}
        {...props}
      />
    </>
  );
}
