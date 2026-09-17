import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { transactions } from "@/data/transactions";
import type { Transaction } from "@/interfaces/transaction";
import { ArrowUpIcon } from "./icons";

export function RecentTransactions({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "lg:rounded-lg lg:bg-white lg:pt-6 lg:pb-5 lg:shadow-[0_1px_0_rgb(0_0_0/0.1)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base leading-7 font-semibold text-[#322074] lg:text-lg">
          Recent Transactions
        </h2>
        <Link
          href="/dashboard/transactions"
          className="text-xs leading-[23px] font-semibold text-[#7f6dc1] underline underline-offset-2 lg:mr-[19px] lg:text-sm"
        >
          View all
        </Link>
      </div>
      <TransactionsTable className="mt-3 hidden lg:table" />
      <TransactionsList className="mt-[9px] lg:hidden" />
    </section>
  );
}

function TransactionsTable({ className }: { className?: string }) {
  return (
    <Table
      className={cn(
        "table-fixed border-separate border-spacing-y-1",
        className,
      )}
    >
      <TableHeader className="[&_tr]:border-0">
        <TableRow className="hover:bg-transparent">
          <TableHead className="h-10 w-[23.4%] px-4 text-xs leading-4 font-semibold text-black/70">
            Narration
          </TableHead>
          <TableHead className="h-10 w-[25%] px-4 text-xs leading-4 font-semibold text-black/70">
            Amount
          </TableHead>
          <TableHead className="h-10 w-[26.1%] px-4 text-xs leading-4 font-semibold text-black/70">
            Date
          </TableHead>
          <TableHead className="h-10 px-4 text-xs leading-4 font-semibold text-black/70">
            Type
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, index) => (
          <TableRow
            key={transaction.id}
            className={cn(
              "h-[62px] border-0 [&>td:first-child]:rounded-l-2xl [&>td:last-child]:rounded-r-2xl",
              index % 2 === 0
                ? "bg-black/3 hover:bg-black/3"
                : "bg-black/1 hover:bg-black/1",
            )}
          >
            <TableCell className="px-4 text-xs leading-[19px] whitespace-normal text-[#101828]">
              <span className="block max-w-[118px]">
                {transaction.narration}
              </span>
            </TableCell>
            <TableCell className="px-4 text-sm leading-[19px] text-[#101828]">
              {transaction.amount}
            </TableCell>
            <TableCell className="px-4 text-sm leading-5 text-black">
              {transaction.date}
              <span className="block text-xs leading-[19.44px] text-[#101828]/50">
                {transaction.time}
              </span>
            </TableCell>
            <TableCell className="px-4">
              <TransactionTypeBadge type={transaction.type} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TransactionTypeBadge({ type }: { type: Transaction["type"] }) {
  return (
    <Badge
      className={cn(
        "h-7 gap-1.5 rounded-xl px-3 py-1 text-sm leading-5 font-normal capitalize",
        type === "credit"
          ? "bg-[#ccfbe0] text-[#008237]"
          : "bg-[#f2cfce] text-[#bb251a]",
      )}
    >
      <ArrowUpIcon
        className={cn(
          "h-4! w-[9px]!",
          type === "credit" ? "text-[#039855]" : "rotate-180 text-[#bb251a]",
        )}
      />
      {type}
    </Badge>
  );
}

const markColors = ["#ed1865", "#f93939", "#6b19f1", "#2236ee", "#0d99c5"];

function TransactionsList({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {transactions.slice(0, 5).map((transaction, index) => (
        <li
          key={transaction.id}
          className="flex h-[75px] items-center gap-[19px]"
        >
          <span
            className="h-12 w-1 shrink-0"
            style={{ backgroundColor: markColors[index % markColors.length] }}
          />
          <div className="flex h-[67px] min-w-0 flex-1 items-center justify-between gap-4 border-b border-[#e2e8f0]">
            <div className="flex min-w-0 flex-col gap-1">
              <p className="truncate text-sm leading-5 font-medium text-[#101828]">
                {transaction.narration}
              </p>
              <p className="text-xs leading-5 text-[#667085]">
                {transaction.date} | {transaction.time}
              </p>
            </div>
            <Image
              src="/icons/dashboard/chevron-right.svg"
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
