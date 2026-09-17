import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function TierUpgradeContent() {
  return (
    <>
      <Image
        src="/images/dashboard/tier-upgrade.jpg"
        alt=""
        width={468}
        height={267}
        className="h-[267px] w-full rounded-[15px] object-cover"
      />
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex flex-col items-center gap-2.5">
          <DialogTitle className="flex items-center gap-1 text-2xl leading-6 font-bold text-[#322074]">
            You are a Tier-1 User
            <Image
              src="/icons/dashboard/emoji-sad.svg"
              alt=""
              width={29}
              height={29}
            />
          </DialogTitle>
          <DialogDescription className="text-[15px] leading-7 text-[#101828]">
            Tier 1 is cool, but Tier 3 is elite. Upgrade now to unlock higher
            limits, advanced features, priority support, and the full power of
            your Avcard account
          </DialogDescription>
        </div>
        <DialogClose
          render={
            <Button
              size="md"
              className="w-[164px] text-base leading-[19px] font-medium tracking-[0.48px]"
            />
          }
        >
          Upgrade now
        </DialogClose>
      </div>
    </>
  );
}
