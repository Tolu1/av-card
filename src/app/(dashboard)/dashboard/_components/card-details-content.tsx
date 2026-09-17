"use client";

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { SheetTitle } from "@/components/ui/sheet";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { cardDetails } from "@/data/cards";
import { CopyIcon } from "./icons";
import { PoweredByProvidus } from "./powered-by-providus";

export function CardDetailsContent() {
  return (
    <div className="flex w-full flex-col gap-[30px] rounded-b-[20px] bg-[#fcfcfd] px-[31px] pt-[17px] pb-[18px] sm:w-[462px]">
      <SheetTitle className="text-center text-xl leading-6 font-bold text-[#101828]">
        Your Card Details
      </SheetTitle>
      <dl className="flex flex-col gap-6 text-[15px] leading-[23px] font-medium text-[#667085]">
        <DetailRow label="Card Number" className="h-[35px]">
          <SecretValue
            masked={cardDetails.maskedNumber}
            value={cardDetails.number}
            className="gap-1.5"
          >
            <Image
              src="/images/logos/mastercard.svg"
              alt="Mastercard"
              width={31}
              height={19}
              className="mx-0.5 h-[19px] w-[31px]"
            />
          </SecretValue>
        </DetailRow>
        <DetailRow label="Card PIN" className="h-[39px]">
          <SecretValue masked="****" value={cardDetails.pin} />
        </DetailRow>
        <DetailRow label="CVV" className="h-[39px]">
          <SecretValue masked="***" value={cardDetails.cvv} />
        </DetailRow>
        <DetailRow label="Expiry Date">{cardDetails.expiryDate}</DetailRow>
        <DetailRow label="Status">
          <Badge className="h-6 rounded-[90px] bg-[#d6f3e9] px-[7px] text-xs leading-4 font-semibold text-[#039855]">
            {cardDetails.status}
          </Badge>
        </DetailRow>
        <DetailRow label="Card Name">{cardDetails.cardName}</DetailRow>
        <DetailRow label="Account Number" className="h-[55px] items-center">
          <div className="flex flex-col gap-2">
            {cardDetails.accountNumber}
            <CopyButton value={cardDetails.accountNumber} />
          </div>
        </DetailRow>
      </dl>
      <PoweredByProvidus />
    </div>
  );
}

type DetailRowProps = React.ComponentProps<"div"> & { label: string };

function DetailRow({ label, className, children, ...props }: DetailRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[120px_1fr] items-start gap-x-4 sm:grid-cols-[149px_1fr] sm:gap-x-[70px]",
        className,
      )}
      {...props}
    >
      <dt>{label}</dt>
      <dd className="text-sm leading-[23px] font-semibold text-[#101828]">
        {children}
      </dd>
    </div>
  );
}

type SecretValueProps = {
  masked: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
};

function SecretValue({ masked, value, className, children }: SecretValueProps) {
  const [shown, setShown] = useState(false);

  return (
    <div className={cn("flex flex-col", className)}>
      <span className="flex items-center gap-2.5">
        {children}
        {shown ? value : masked}
      </span>
      <div className="flex items-center gap-[15px]">
        <button
          type="button"
          onClick={() => setShown((current) => !current)}
          className="flex items-center gap-[3px] text-xs leading-[19px] font-semibold text-[#72848b]"
        >
          {shown ? "Hide" : "Show"}
          <Image src="/icons/dashboard/eye.svg" alt="" width={18} height={18} />
        </button>
        <CopyButton value={value} />
      </div>
    </div>
  );
}

function CopyButton({ value }: { value: string }) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(value)}
      className="flex w-fit items-center gap-[3px] text-xs leading-[19px] font-semibold text-[#72848b]"
    >
      Copy
      {isCopied ? (
        <CheckIcon className="size-6" />
      ) : (
        <CopyIcon className="size-6" />
      )}
    </button>
  );
}
