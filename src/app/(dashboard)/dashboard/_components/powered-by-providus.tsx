import Image from "next/image";
import { cn } from "@/lib/utils";

export function PoweredByProvidus({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "flex h-8 items-center justify-center gap-2 text-xs leading-[19px] font-semibold text-[#101828]",
        className,
      )}
      {...props}
    >
      Powered by ProvidusBank
      <Image
        src="/images/logos/providus-bank.png"
        alt=""
        width={27}
        height={23}
      />
    </p>
  );
}
