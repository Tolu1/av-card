"use client";

import { useState } from "react";
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
import { TablePagination } from "@dashboard/_components/table-pagination";
import { TransactionsList } from "@dashboard/_components/transactions-list";
import { TransactionsTable } from "@dashboard/_components/transactions-table";

export function CardTransactions({
  className,
  ...props
}: React.ComponentProps<"section">) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const pageCount = Math.ceil(transactions.length / pageSize);
  const rows = transactions.slice((page - 1) * pageSize, page * pageSize);

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
          transactions={rows}
          className="mt-3 hidden lg:table"
        />
        <TransactionsList transactions={rows} className="mt-[3px] lg:hidden" />
      </div>
      <TablePagination
        id="card-transactions-rows"
        page={page}
        pageCount={pageCount}
        onPageChange={setPage}
        pageSize={pageSize}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
        totalResults={transactions.length}
        className="mt-[15px] lg:mt-[19px] lg:pl-7"
      />
    </section>
  );
}
