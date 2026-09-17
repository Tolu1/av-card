import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

type SuccessMessageProps = {
  title: string;
  description: string;
  action: string;
  onAction?: () => void;
};

export function SuccessMessage({
  title,
  description,
  action,
  onAction,
}: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center gap-7 text-center">
      <Image
        src="/images/dashboard/success-placeholder.png"
        alt=""
        width={198}
        height={198}
        className="size-[198px] object-cover"
      />
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-2.5">
          <SheetTitle className="text-2xl leading-6 font-bold text-[#322074]">
            {title}
          </SheetTitle>
          <SheetDescription className="max-w-[451px] text-[15px] leading-7 text-[#101828]">
            {description}
          </SheetDescription>
        </div>
        <SheetClose
          onClick={onAction}
          render={
            <Button
              size="md"
              className="w-[164px] text-base leading-[19px] font-medium tracking-[0.48px]"
            />
          }
        >
          {action}
        </SheetClose>
      </div>
    </div>
  );
}
