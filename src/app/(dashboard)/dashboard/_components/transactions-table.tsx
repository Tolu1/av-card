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
import { ArrowUpIcon } from "./icons";

type TransactionsTableProps = {
  transactions: Transaction[];
  className?: string;
};

export function TransactionsTable({
  transactions,
  className,
}: TransactionsTableProps) {
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
              {formatTransactionDate(transaction.date)}
              <span className="block text-xs leading-[19.44px] text-[#101828]/50">
                {formatTransactionTime(transaction.date)}
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

export function TransactionTypeBadge({ type }: { type: Transaction["type"] }) {
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
