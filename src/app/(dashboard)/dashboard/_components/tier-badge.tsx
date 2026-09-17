"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InfoIcon } from "./icons";
import { TierUpgradeContent } from "./tier-upgrade-content";

const tierModalSeenKey = "tier-upgrade-modal-seen";

export function TierBadge() {
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex h-6 items-center gap-[5px] rounded-[19px] border border-[#c8c0e4] pr-1 pl-[5px] text-[11px] leading-[23px] font-semibold text-[#010a17] lg:h-[31px] lg:px-2.5 lg:text-sm">
        Tier-1 User
        <InfoIcon className="size-4 text-[#482ea6] lg:size-[22px]" />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="gap-7 rounded-[26px] bg-white p-[30px] ring-0 sm:max-w-[528px]"
      >
        <TierUpgradeContent />
      </DialogContent>
    </Dialog>
  );
}
