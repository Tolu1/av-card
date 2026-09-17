"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import type { VirtualCard as VirtualCardData } from "@/interfaces/card";
import { CardDetailsContent } from "@dashboard/_components/card-details-content";
import { FundCardContent } from "@dashboard/_components/fund-card-content";
import {
  ChangePinIcon,
  CloseIcon,
  DeleteIcon,
  FundIcon,
  MoreIcon,
  RenameIcon,
  ViewDetailsIcon,
} from "@dashboard/_components/icons";
import { ChangePinContent } from "./change-pin-content";
import { NameCardContent } from "./name-card-content";

export function VirtualCard({ card }: { card: VirtualCardData }) {
  const [balanceHidden, setBalanceHidden] = useState(true);
  const [active, setActive] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex gap-[5px] lg:gap-px">
      <div
        className={cn(
          "relative h-[184px] shrink-0 rounded-[15px] border border-[#c8c0e4] bg-[url(/images/dashboard/virtual-card-pattern.png),linear-gradient(#7112e5,#622aa6)] bg-size-[100%_100%] pt-5 pl-2.5 text-white shadow-[0_8px_20px_rgb(0_0_0/0.25)] transition-[width,max-width] duration-300 ease-out min-[440px]:pl-[15px] lg:h-60 lg:pt-[27px] lg:pl-3",
          menuOpen
            ? "w-[calc(100%-153px)] max-w-[254px] lg:w-[265px]"
            : "w-full max-w-[422px] pr-3 min-[440px]:pr-6 lg:w-[422px] lg:pr-5",
        )}
      >
        <div className="flex h-6 items-center lg:h-[26px]">
          <Image
            src="/images/logos/mastercard.svg"
            alt="Mastercard"
            width={31}
            height={19}
            className="mx-0.5 h-[18px] w-[29px] lg:h-[19px] lg:w-[31px]"
          />
          <p className="ml-2 min-w-0 truncate text-[11px] leading-[23px] font-semibold min-[440px]:ml-2.5 min-[440px]:text-[13px] lg:text-sm">
            {card.maskedNumber}
          </p>
          {!menuOpen && (
            <>
              <Switch
                size="lg"
                checked={active}
                onCheckedChange={setActive}
                aria-label="Card active"
                className="ml-1.5 shrink-0 data-[size=lg]:h-5 min-[440px]:ml-[11px] lg:data-[size=lg]:h-[26px] data-checked:bg-[#42d38b] data-unchecked:bg-[#98a2b3]"
              />
              <Badge
                className={cn(
                  "ml-1.5 h-[22px] w-[68px] shrink-0 rounded-[17px] text-xs leading-[19px] font-bold min-[440px]:ml-2.5 min-[440px]:w-[75px] lg:h-[26px]",
                  active
                    ? "bg-[#d6f3e9] text-[#045130]"
                    : "bg-[#fde1e1] text-[#912018]",
                )}
              >
                {active ? "Active" : "Inactive"}
              </Badge>
              <button
                type="button"
                aria-label="Card options"
                onClick={() => setMenuOpen(true)}
                className="ml-auto shrink-0 pl-1"
              >
                <MoreIcon className="h-6 w-5 min-[440px]:w-[25px]" />
              </button>
            </>
          )}
        </div>
        <div className="mt-2 flex items-center gap-2.5 lg:mt-4">
          <p className="text-xs leading-[15px] font-semibold text-[#fcfcfd] lg:text-[13px] lg:leading-4">
            Your Balance
          </p>
          <button
            type="button"
            aria-label={balanceHidden ? "Show balance" : "Hide balance"}
            onClick={() => setBalanceHidden((hidden) => !hidden)}
          >
            <Image
              src="/icons/dashboard/eye-closed.svg"
              alt=""
              width={24}
              height={24}
              className="size-5 lg:size-[22px]"
            />
          </button>
        </div>
        <p className="mt-1 text-[26px] leading-8 font-bold lg:mt-[3px] lg:text-[30px] lg:leading-[37px]">
          {balanceHidden ? "₦ XXXX.XX" : card.balance}
        </p>
        <dl className="mt-6 text-xs leading-5 lg:mt-[35px] lg:text-sm lg:leading-[23px]">
          <div className="flex gap-2.5">
            <dt className="font-medium">CVV</dt>
            <dd className="font-semibold">{card.cvv}</dd>
          </div>
          <div className="flex gap-2.5 lg:mt-2">
            <dt className="font-medium">Exp Date</dt>
            <dd className="font-semibold">{card.expiryDate}</dd>
          </div>
        </dl>
        <Image
          src="/images/dashboard/av-card-icon-white.png"
          alt=""
          width={30}
          height={34}
          className="absolute right-[23px] bottom-[21px] h-[34px] w-[30px] lg:right-[25px] lg:bottom-[19px]"
        />
      </div>
      {menuOpen && (
        <div className="relative flex h-[184px] w-[148px] shrink-0 flex-col items-start gap-2.5 rounded-[15px] bg-[#f8f9fa] pt-[9px] pl-[13px] text-[13px] leading-4 text-[#622aa6] lg:mt-[3px] lg:h-[234px] lg:w-[154px] lg:gap-4 lg:pt-[19px] lg:pl-4 lg:text-sm lg:leading-[17px]">
          <Sheet>
            <SheetTrigger className="flex h-[26px] min-w-[121px] items-center gap-3 rounded-[5px] px-1.5 whitespace-nowrap hover:bg-[#c8c0e4]/26">
              <FundIcon className="size-[18px] text-[#482ea6]" />
              Fund Card
            </SheetTrigger>
            <SheetContent side="top" variant="modal">
              <FundCardContent />
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger className="flex h-[26px] min-w-[121px] items-center gap-3 rounded-[5px] px-1.5 whitespace-nowrap hover:bg-[#c8c0e4]/26">
              <ViewDetailsIcon className="size-[18px] text-[#482ea6]" />
              View Details
            </SheetTrigger>
            <SheetContent side="top" variant="modal">
              <CardDetailsContent />
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger className="flex h-[26px] min-w-[121px] items-center gap-3 rounded-[5px] px-1.5 whitespace-nowrap hover:bg-[#c8c0e4]/26">
              <ChangePinIcon className="size-[18px] text-[#482ea6]" />
              Change Pin
            </SheetTrigger>
            <SheetContent side="top" variant="modal">
              <ChangePinContent />
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger className="flex h-[26px] min-w-[121px] items-center gap-3 rounded-[5px] px-1.5 whitespace-nowrap hover:bg-[#c8c0e4]/26">
              <RenameIcon className="size-[18px] text-[#482ea6]" />
              Name Card
            </SheetTrigger>
            <SheetContent side="top" variant="modal">
              <NameCardContent />
            </SheetContent>
          </Sheet>
          <button
            type="button"
            className="flex h-[26px] min-w-[121px] items-center gap-3 rounded-[5px] px-1.5 whitespace-nowrap hover:bg-[#c8c0e4]/26"
          >
            <DeleteIcon className="size-[18px] text-[#482ea6]" />
            Delete Card
          </button>
          <button
            type="button"
            aria-label="Close card options"
            onClick={() => setMenuOpen(false)}
            className="absolute top-0 -right-5 flex size-[29px] items-center justify-center rounded-lg text-[#667085] lg:-right-7"
          >
            <CloseIcon className="size-[15px]" />
          </button>
        </div>
      )}
    </div>
  );
}
