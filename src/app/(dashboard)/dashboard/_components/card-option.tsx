import Image from "next/image";
import { cn } from "@/lib/utils";
import { card } from "@/data/cards";

export function CardOption({ className }: { className?: string }) {
  return (
    <span className="flex items-center">
      <Image
        src="/images/logos/mastercard.svg"
        alt="Mastercard"
        width={31}
        height={19}
        className={cn("mx-[5px] h-[19px] w-[31px]", className)}
      />
      <span className="pl-1.5">{card.maskedNumber}</span>
    </span>
  );
}
