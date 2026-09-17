"use client";

import Image, { getImageProps } from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { card } from "@/data/cards";
import { CardDetailsContent } from "./card-details-content";
import { CardOption } from "./card-option";
import { FundCardContent } from "./fund-card-content";
import { CaretDownIcon } from "./icons";

export function BalanceCard() {
  const [balanceHidden, setBalanceHidden] = useState(false);
  const [active, setActive] = useState(true);

  return (
    <section className="relative isolate overflow-hidden rounded-[20px] px-5 pt-3.5 pb-[27px] shadow-[0_8px_20px_rgb(0_0_0/0.25)] lg:pt-[41px] lg:pr-[29px] lg:pl-8">
      <CardBackground />
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3.5 lg:gap-[13px]">
          <span className="text-[15px] leading-[23px] font-medium text-white lg:text-sm lg:leading-[21px]">
            Select Card
          </span>
          <Select
            defaultValue={card.id}
            items={{
              [card.id]: (
                <CardOption className="h-4 w-[26px] lg:h-[19px] lg:w-[31px]" />
              ),
            }}
          >
            <SelectTrigger
              aria-label="Select card"
              icon={<CaretDownIcon className="size-6 text-[#f2f4f7]" />}
              className="w-fit min-w-[181px] gap-0.5 rounded-lg border-0 bg-[#7f6dc1] px-[5px] py-1 text-[15px] leading-[26px] font-semibold text-[#f2f4f7] data-[size=default]:h-[33px] lg:w-[220px] lg:gap-0 lg:text-base"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={card.id}>
                <CardOption className="h-4 w-[26px] lg:h-[19px] lg:w-[31px]" />
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden items-center gap-2.5 pt-[7px] lg:flex">
          <Switch
            size="lg"
            checked={active}
            onCheckedChange={setActive}
            aria-label="Card active"
            className="data-checked:bg-[#42d38b] data-unchecked:bg-[#98a2b3]"
          />
          <Badge
            className={cn(
              "h-[26px] w-[75px] rounded-[17px] text-xs leading-[19px] font-bold",
              active
                ? "bg-[#d6f3e9] text-[#045130]"
                : "bg-[#fde1e1] text-[#912018]",
            )}
          >
            {active ? "Active" : "Inactive"}
          </Badge>
        </div>
      </div>
      <div className="mt-[11px] flex items-center gap-4">
        <p className="text-[25px] leading-9 font-bold tracking-[-0.5px] text-white lg:text-[28px] lg:tracking-[-0.56px]">
          {balanceHidden ? "₦ XXXX.XX" : card.balance}
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
          />
        </button>
      </div>
      <p className="mt-1 text-xs leading-[19px] font-medium text-white lg:mt-2">
        {card.exchangeRate}
      </p>
      <div className="mt-[18px] flex gap-[13px] lg:mt-2.5 lg:gap-5">
        <Sheet>
          <SheetTrigger
            render={
              <Button className="h-[29px] w-[144px] gap-[7px] rounded-lg bg-white px-0 text-xs leading-[23px] text-[#7f6dc1] hover:bg-white/90 lg:h-[43px] lg:w-[222px] lg:rounded-[10px] lg:text-sm" />
            }
          >
            Fund Card
            <Image
              src="/icons/dashboard/plus.svg"
              alt=""
              width={24}
              height={24}
              className="size-[17px] lg:size-6"
            />
          </SheetTrigger>
          <SheetContent side="top" variant="modal">
            <FundCardContent />
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger
            render={
              <Button className="h-[29px] w-[144px] gap-[7px] rounded-lg bg-white px-0 text-xs leading-[23px] text-[#7f6dc1] hover:bg-white/90 lg:h-[43px] lg:w-[222px] lg:rounded-[10px] lg:text-sm" />
            }
          >
            Card Details
            <Image
              src="/icons/dashboard/details.svg"
              alt=""
              width={24}
              height={24}
              className="size-4 lg:size-6"
            />
          </SheetTrigger>
          <SheetContent side="top" variant="modal">
            <CardDetailsContent />
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

function CardBackground() {
  const common = { alt: "", fetchPriority: "high" as const };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/images/dashboard/card-background.png",
    width: 791,
    height: 229,
    sizes: "791px",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/dashboard/card-background-mobile.png",
    width: 413,
    height: 192,
    sizes: "413px",
  });

  return (
    <picture className="contents">
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img
        {...rest}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      />
    </picture>
  );
}
