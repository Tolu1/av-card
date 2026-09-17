import Link from "next/link";
import { cn } from "@/lib/utils";
import { transactions } from "@/data/transactions";
import { TransactionsList } from "./transactions-list";
import { TransactionsTable } from "./transactions-table";

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
      <TransactionsTable
        transactions={transactions}
        className="mt-3 hidden lg:table"
      />
      <TransactionsList
        transactions={transactions.slice(0, 5)}
        className="mt-[9px] lg:hidden"
      />
    </section>
  );
}
