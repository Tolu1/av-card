"use client";

import { createColumnHelper, flexRender } from "@tanstack/react-table";
import type { ReactTable, TableFeatures } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatTransactionDate, formatTransactionTime } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Transaction } from "@/interfaces/transaction";
import { TransactionActions } from "./transaction-actions";

const columnHelper = createColumnHelper<TableFeatures, Transaction>();

export const transactionColumns = columnHelper.columns([
  columnHelper.accessor("narration", {
    header: "Narration",
    cell: (info) => (
      <span className="text-xs leading-[19px] text-[#101828]">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => (
      <span className="text-sm leading-[19px] text-[#101828]">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Date-Time",
    filterFn: (row, columnId, filterValue) => {
      const day = filterValue as Date | undefined;
      if (!day) return true;
      const date = new Date(row.getValue<string>(columnId));
      return date.toDateString() === day.toDateString();
    },
    cell: (info) => (
      <span className="text-sm leading-5 text-black">
        {formatTransactionDate(info.getValue())}
        <span className="block text-xs leading-[19.44px] text-[#101828]/50">
          {formatTransactionTime(info.getValue())}
        </span>
      </span>
    ),
  }),
  columnHelper.accessor("type", {
    header: "Status",
    cell: (info) => (
      <Badge
        className={cn(
          "h-7 rounded-xl px-3 py-1 text-sm leading-5 font-normal capitalize",
          info.getValue() === "credit"
            ? "bg-[#ccfbe0] text-[#008237]"
            : "bg-[#f2cfce] text-[#c00f0c]",
        )}
      >
        {info.getValue()}
      </Badge>
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: "Action",
    cell: (info) => <TransactionActions transaction={info.row.original} />,
  }),
]);

const columnWidths = ["w-[25.4%]", "w-[23.2%]", "w-[20.9%]", "w-[18.9%]", ""];

export function TransactionsTable({
  table,
  className,
}: {
  table: ReactTable<TableFeatures, Transaction>;
  className?: string;
}) {
  return (
    <Table
      className={cn(
        "table-fixed border-separate border-spacing-y-1",
        className,
      )}
    >
      <TableHeader className="[&_tr]:border-0">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="hover:bg-transparent">
            {headerGroup.headers.map((header, index) => (
              <TableHead
                key={header.id}
                className={cn(
                  "h-10 px-4 text-xs leading-4 font-semibold text-black/70",
                  columnWidths[index],
                )}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row, index) => (
          <TableRow
            key={row.id}
            className={cn(
              "h-[62px] border-0 [&>td:first-child]:rounded-l-2xl [&>td:last-child]:rounded-r-2xl",
              index % 2 === 0
                ? "bg-black/3 hover:bg-black/3"
                : "bg-black/1 hover:bg-black/1",
            )}
          >
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id} className="px-4 whitespace-normal">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
