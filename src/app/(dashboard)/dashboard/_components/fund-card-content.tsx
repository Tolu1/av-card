"use client";

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { fundingAccount } from "@/data/cards";
import { CopyIcon } from "./icons";
import { PoweredByProvidus } from "./powered-by-providus";

const accountRows = [
  { label: "Bank", value: fundingAccount.bank },
  { label: "Account No", value: fundingAccount.accountNumber },
  { label: "Card Name", value: fundingAccount.cardName },
];

export function FundCardContent() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="flex w-full flex-col rounded-b-[20px] bg-[#fcfcfd] px-3 pt-[9px] pb-[15px] sm:w-[518px]">
      <Image
        src="/images/dashboard/fund-card.png"
        alt=""
        width={197}
        height={197}
        className="mx-auto size-[197px]"
      />
      <div className="mt-[9px] flex flex-col items-center gap-[7px] text-center text-[#101828]">
        <SheetTitle className="text-xl leading-6 font-bold">
          Fuel Your Card, Power Your Payments
        </SheetTitle>
        <SheetDescription className="max-w-[404px] text-base leading-[26px] font-medium text-[#101828]">
          Copy the Account Number below to transfer funds to this card
        </SheetDescription>
      </div>
      <div className="mt-[17px] flex flex-col gap-5 px-[30px]">
        <dl className="rounded-[5px] bg-[#f2f4f7] p-5 text-sm leading-[23px] text-[#101828]">
          {accountRows.map((row) => (
            <div
              key={row.label}
              className="grid h-[43px] grid-cols-[123px_1fr] items-center border-b border-[#e4e7ec] px-5"
            >
              <dt className="font-medium">{row.label}</dt>
              <dd className="font-semibold">{row.value}</dd>
            </div>
          ))}
        </dl>
        <Button
          size="md"
          onClick={() => copyToClipboard(fundingAccount.accountNumber)}
          className="w-full gap-5 text-[#fcfcfd]"
        >
          Copy Account Number
          {isCopied ? (
            <CheckIcon className="size-6 text-[#edeaf6]" />
          ) : (
            <CopyIcon className="size-6 text-[#edeaf6]" />
          )}
        </Button>
      </div>
      <PoweredByProvidus className="mt-[30px]" />
    </div>
  );
}
