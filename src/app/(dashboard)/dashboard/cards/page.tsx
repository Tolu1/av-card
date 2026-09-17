"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CreateCardContent } from "@dashboard/_components/create-card-content";
import { PlusIcon } from "@dashboard/_components/icons";
import { IntraCardTransfer } from "@dashboard/_components/intra-card-transfer";
import { CardTransactions } from "./_components/card-transactions";
import { NoCards } from "./_components/no-cards";
import { VirtualCards } from "./_components/virtual-cards";

export default function Page() {
  const [hasCards, setHasCards] = useState(false);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-[13px] sm:px-16 lg:px-[60px]">
      {!hasCards ? (
        <NoCards
          onCreated={() => setHasCards(true)}
          className="pb-7 lg:mt-8 lg:mb-[50px]"
        />
      ) : (
        <div className="pt-[26px] pb-[17px] lg:pt-[39px] lg:pb-[33px]">
          <div className="flex items-center justify-between">
            <h1 className="text-base leading-5 font-semibold text-[#322074] lg:text-xl lg:leading-6">
              My Virtual Cards
            </h1>
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    className="h-[34px] gap-[7px] rounded-[15px] px-0 text-xs leading-[23px] text-[#482ea6] hover:bg-transparent lg:h-[43px] lg:w-[170px] lg:border-2 lg:border-[#482ea6] lg:text-sm"
                  />
                }
              >
                Add New Card
                <PlusIcon className="size-[18px]" />
              </SheetTrigger>
              <SheetContent side="top" variant="modal">
                <CreateCardContent />
              </SheetContent>
            </Sheet>
          </div>
          <VirtualCards className="mt-5 lg:mt-[42px]" />
          <div className="mt-[22px] flex flex-col lg:mt-10 xl:grid xl:grid-cols-[minmax(0,1fr)_490px] xl:items-start xl:gap-x-[26px]">
            <CardTransactions className="order-1 mt-[17px] lg:mt-[26px] xl:order-none xl:mt-0" />
            <IntraCardTransfer className="xl:[&_form]:px-[15px]" />
          </div>
        </div>
      )}
    </main>
  );
}
