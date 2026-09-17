"use client";

import type {
  ColumnFiltersState,
  PaginationState,
} from "@tanstack/react-table";
import {
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  filterFn_includesString,
  globalFilteringFeature,
  rowPaginationFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { transactions } from "@/data/transactions";
import type { Transaction } from "@/interfaces/transaction";
import { TablePagination } from "@dashboard/_components/table-pagination";
import { TransactionsList } from "@dashboard/_components/transactions-list";
import { TransactionDetailsContent } from "./_components/transaction-details-content";
import { TransactionsFilters } from "./_components/transactions-filters";
import {
  TransactionsTable,
  transactionColumns,
} from "./_components/transactions-table";

const features = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  rowPaginationFeature,
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
});

function toCsv(rows: Transaction[]) {
  const header = "Narration,Amount,Date,Recipient,Status,Type";
  const body = rows.map((row) =>
    [row.narration, row.amount, row.date, row.recipient, row.status, row.type]
      .map((value) => `"${value}"`)
      .join(","),
  );
  return [header, ...body].join("\n");
}

export default function Page() {
  const [selected, setSelected] = useState<Transaction>();
  const [search, setSearch] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useTable({
    features,
    columns: transactionColumns,
    data: transactions,
    globalFilterFn: filterFn_includesString,
    state: { globalFilter: search, columnFilters, pagination },
    onGlobalFilterChange: setSearch,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
  });

  const typeFilter =
    (columnFilters.find((filter) => filter.id === "type")?.value as
      string | undefined) ?? "all";
  const dateFilter = columnFilters.find((filter) => filter.id === "date")
    ?.value as Date | undefined;

  function setFilter(id: string, value: unknown) {
    setColumnFilters((filters) => [
      ...filters.filter((filter) => filter.id !== id),
      ...(value === undefined ? [] : [{ id, value }]),
    ]);
    setPagination((current) => ({ ...current, pageIndex: 0 }));
  }

  const filteredRows = table.getFilteredRowModel().rows;

  function downloadReport() {
    const blob = new Blob([toCsv(filteredRows.map((row) => row.original))], {
      type: "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mx-auto w-full max-w-[1440px] px-[13px] pt-[29px] pb-[17px] sm:px-16 lg:px-[60px] lg:pt-[47px] lg:pb-[33px]">
      <h1 className="text-base leading-5 font-semibold text-[#322074] lg:text-xl lg:leading-6">
        Transactions
      </h1>
      <TransactionsFilters
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPagination((current) => ({ ...current, pageIndex: 0 }));
        }}
        type={typeFilter}
        onTypeChange={(type) =>
          setFilter("type", type === "all" ? undefined : type)
        }
        date={dateFilter}
        onDateChange={(date) => setFilter("date", date)}
        onDownload={downloadReport}
        className="mt-5 lg:mt-6"
      />
      <div className="lg:mt-[17px] lg:rounded-lg lg:bg-white/25 lg:pt-5 lg:pb-6 lg:shadow-[0_1px_0_rgb(0_0_0/0.1)]">
        <TransactionsTable table={table} className="hidden lg:table" />
        <TransactionsList
          transactions={table.getRowModel().rows.map((row) => row.original)}
          onSelect={setSelected}
          className="mt-[27px] lg:hidden"
        />
      </div>
      <TablePagination
        id="transactions-rows"
        page={pagination.pageIndex + 1}
        pageCount={table.getPageCount()}
        onPageChange={(page) =>
          setPagination((current) => ({ ...current, pageIndex: page - 1 }))
        }
        pageSize={pagination.pageSize}
        onPageSizeChange={(pageSize) =>
          setPagination({ pageIndex: 0, pageSize })
        }
        totalResults={filteredRows.length}
        className="mt-[15px] lg:mt-7"
      />
      <Sheet
        open={selected !== undefined}
        onOpenChange={(open) => {
          if (!open) setSelected(undefined);
        }}
      >
        <SheetContent side="top" variant="modal">
          {selected && <TransactionDetailsContent transaction={selected} />}
        </SheetContent>
      </Sheet>
    </main>
  );
}
