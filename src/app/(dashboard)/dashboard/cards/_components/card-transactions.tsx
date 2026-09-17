"use client";

import {
  ChevronDownIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { card } from "@/data/cards";
import { transactions } from "@/data/transactions";
import { CardOption } from "@dashboard/_components/card-option";
import { CaretDownIcon } from "@dashboard/_components/icons";
import { TransactionsList } from "@dashboard/_components/transactions-list";
import { TransactionsTable } from "@dashboard/_components/transactions-table";

export function CardTransactions({
  className,
  ...props
}: React.ComponentProps<"section">) {
  const [page, setPage] = useState(1);

  return (
    <section
      className={cn(
        "lg:rounded-[15px] lg:border lg:border-[#e4e7ec]/73 lg:p-[9px]",
        className,
      )}
      {...props}
    >
      <div className="lg:rounded-lg lg:bg-white lg:px-2.5 lg:pt-6 lg:pb-2.5 lg:shadow-[0_1px_0_rgb(0_0_0/0.1)]">
        <div className="flex flex-col gap-5 border-b border-[#f2f4f7] py-[11px] lg:flex-row lg:items-center lg:justify-between lg:border-0 lg:py-0">
          <h2 className="text-base leading-5 font-semibold text-[#322074] lg:text-lg lg:leading-7">
            <span className="hidden lg:inline">Recent </span>Card Transactions
          </h2>
          <div className="flex items-center gap-3 lg:gap-2.5">
            <label
              htmlFor="card-transactions-card"
              className="text-[13px] leading-[27px] font-medium text-black lg:text-sm lg:leading-[23px] lg:text-[#322074]"
            >
              Select Card
            </label>
            <Select
              defaultValue={card.id}
              items={{
                [card.id]: (
                  <CardOption className="h-[17px] w-[29px] lg:h-[19px] lg:w-[31px]" />
                ),
              }}
            >
              <SelectTrigger
                id="card-transactions-card"
                icon={
                  <CaretDownIcon className="size-[22px] text-[#667085] lg:size-6 lg:text-[#98a2b3]" />
                }
                className="w-[174px] gap-0 rounded-lg border-[#482ea6] px-0 pr-0.5 text-xs leading-[26px] font-semibold text-[#667085] data-[size=default]:h-7 lg:w-[253px] lg:border-[#c8c0e4] lg:bg-white lg:px-2.5 lg:text-base lg:text-[#101828] lg:data-[size=default]:h-[37px]"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={card.id}>
                  <CardOption className="h-[17px] w-[29px] lg:h-[19px] lg:w-[31px]" />
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <TransactionsTable
          transactions={transactions}
          className="mt-3 hidden lg:table"
        />
        <TransactionsList
          transactions={transactions}
          className="mt-[3px] lg:hidden"
        />
      </div>
      <div className="mt-[15px] flex items-center justify-center lg:mt-[19px] lg:justify-between lg:pl-7">
        <div className="hidden items-center gap-1.5 text-sm leading-[23px] font-medium text-[#667085] lg:flex">
          <label htmlFor="card-transactions-rows">Showing</label>
          <Select defaultValue="6">
            <SelectTrigger
              id="card-transactions-rows"
              icon={<ChevronDownIcon className="size-5 text-[#667085]" />}
              className="w-[59px] gap-2.5 rounded-[4px] border-[#98a2b3] bg-white px-2.5 text-sm leading-[23px] font-semibold text-[#667085] data-[size=default]:h-9"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
          <span>of 30 results</span>
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent className="gap-[7px] text-[#667085]">
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Go to previous page"
                onClick={(event) => {
                  event.preventDefault();
                  setPage((current) => Math.max(1, current - 1));
                }}
                className="size-[35px] rounded-md text-[#667085] hover:bg-transparent"
              >
                <ChevronsLeftIcon className="size-3.5" />
              </PaginationLink>
            </PaginationItem>
            {[1, 2, 3].map((number) => (
              <PaginationItem key={number}>
                <PaginationLink
                  href="#"
                  isActive={page === number}
                  onClick={(event) => {
                    event.preventDefault();
                    setPage(number);
                  }}
                  className="size-[35px] rounded-md border-0 text-xs leading-[19px] font-semibold text-[#667085] data-[active=true]:bg-[#5a43af] data-[active=true]:text-[#edeaf6]"
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis className="w-4" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={page === 5}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(5);
                }}
                className="size-[35px] rounded-md border-0 text-xs leading-[19px] font-semibold text-[#667085] data-[active=true]:bg-[#5a43af] data-[active=true]:text-[#edeaf6]"
              >
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Go to next page"
                onClick={(event) => {
                  event.preventDefault();
                  setPage((current) => Math.min(5, current + 1));
                }}
                className="size-[35px] rounded-md text-[#667085] hover:bg-transparent"
              >
                <ChevronsRightIcon className="size-3.5" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
