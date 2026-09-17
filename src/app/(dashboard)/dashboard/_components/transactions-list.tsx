import Image from "next/image";
import { formatTransactionDate, formatTransactionTime } from "@/lib/format";
import type { Transaction } from "@/interfaces/transaction";

const markColors = ["#ed1865", "#f93939", "#6b19f1", "#2236ee", "#0d99c5"];

type TransactionsListProps = {
  transactions: Transaction[];
  onSelect?: (transaction: Transaction) => void;
  className?: string;
};

export function TransactionsList({
  transactions,
  onSelect,
  className,
}: TransactionsListProps) {
  return (
    <ul className={className}>
      {transactions.map((transaction, index) => (
        <li
          key={transaction.id}
          className="flex h-[75px] items-center gap-[19px]"
        >
          <span
            className="h-12 w-1 shrink-0"
            style={{ backgroundColor: markColors[index % markColors.length] }}
          />
          <button
            type="button"
            disabled={!onSelect}
            onClick={onSelect ? () => onSelect(transaction) : undefined}
            className="flex h-[67px] min-w-0 flex-1 items-center justify-between gap-4 border-b border-[#e2e8f0] text-left"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <p className="truncate text-sm leading-5 font-medium text-[#101828]">
                {transaction.narration}
              </p>
              <p className="text-xs leading-5 text-[#667085]">
                {formatTransactionDate(transaction.date)} |{" "}
                {formatTransactionTime(transaction.date)}
              </p>
            </div>
            <Image
              src="/icons/dashboard/chevron-right.svg"
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
