"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InfoIcon } from "./icons";

const tierModalSeenKey = "tier-upgrade-modal-seen";

export function Welcome() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(tierModalSeenKey)) return;
    const timeout = setTimeout(() => {
      sessionStorage.setItem(tierModalSeenKey, "true");
      setOpen(true);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center gap-[13px]">
      <h1 className="text-base leading-[42px] font-semibold tracking-[0.32px] text-[#322074] lg:text-xl lg:tracking-[0.4px]">
        Welcome, Virtue
      </h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex h-6 items-center gap-[5px] rounded-[19px] border border-[#c8c0e4] pr-1 pl-[5px] text-[11px] leading-[23px] font-semibold text-[#010a17] lg:h-[31px] lg:px-2.5 lg:text-sm">
          Tier-1 User
          <InfoIcon className="size-4 text-[#482ea6] lg:size-[22px]" />
        </DialogTrigger>
        <TierUpgradeDialogContent onUpgrade={() => setOpen(false)} />
      </Dialog>
    </div>
  );
}

function TierUpgradeDialogContent({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <DialogContent
      showCloseButton={false}
      className="gap-7 rounded-[26px] bg-white p-[30px] ring-0 sm:max-w-[528px]"
    >
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
        <Button
          size="md"
          onClick={onUpgrade}
          className="w-[164px] text-base leading-[19px] font-medium tracking-[0.48px]"
        >
          Upgrade now
        </Button>
      </div>
    </DialogContent>
  );
}
