"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import type { Transaction } from "@/interfaces/transaction";
import {
  DataViewIcon,
  MoreIcon,
  RaiseHandIcon,
  ReceiptIcon,
} from "@dashboard/_components/icons";
import { TransactionDetailsContent } from "./transaction-details-content";

export function TransactionActions({
  transaction,
}: {
  transaction: Transaction;
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger
          aria-label="Transaction actions"
          className="flex size-[30px] items-center justify-center rounded-lg bg-black/4"
        >
          <MoreIcon className="size-5 text-black" />
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[252px] gap-0 rounded-[10px] p-0 shadow-[0_2px_4px_rgb(0_0_0/0.15)]"
        >
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="flex h-[52px] w-full items-center gap-2.5 p-2.5 text-sm leading-[23px] font-semibold text-[#667085]"
          >
            <DataViewIcon className="size-8 rounded-full bg-[#e4e7ec]/28 text-[#667085]" />
            View Transaction Details
          </button>
          <button
            type="button"
            className="flex h-[52px] w-full items-center gap-2.5 border-t border-[#e4e7ec] p-2.5 text-sm leading-[23px] font-semibold text-[#667085]"
          >
            <ReceiptIcon className="size-8 rounded-full bg-[#e4e7ec]/28 text-[#667085]" />
            Download Receipt
          </button>
          <button
            type="button"
            className="flex h-[52px] w-full items-center gap-2.5 border-t border-[#e4e7ec] p-2.5 text-sm leading-[23px] font-semibold text-[#667085]"
          >
            <RaiseHandIcon className="size-8 rounded-full bg-[#e4e7ec]/28 text-[#667085]" />
            Raise Dispute
          </button>
        </PopoverContent>
      </Popover>
      <Sheet open={detailsOpen} onOpenChange={setDetailsOpen}>
        <SheetContent side="top" variant="modal">
          <TransactionDetailsContent transaction={transaction} />
        </SheetContent>
      </Sheet>
    </>
  );
}
