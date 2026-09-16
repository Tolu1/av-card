import Image from "next/image";

const variants = {
  default: "/images/logos/av-card.png",
  white: "/images/logos/av-card-white.png",
} as const;

type LogoProps = Omit<React.ComponentProps<typeof Image>, "src" | "alt"> & {
  variant?: keyof typeof variants;
};

export function Logo({ variant = "default", className, ...props }: LogoProps) {
  return (
    <Image
      src={variants[variant]}
      alt="AV Card"
      width={136}
      height={51.16}
      quality={100}
      className={className}
      {...props}
    />
  );
}
