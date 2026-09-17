import Image from "next/image";
import { expenses } from "@/data/expenses";
import { cn } from "@/lib/utils";

export function TopExpenses({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "rounded-2xl border-[0.73px] border-[#e8e8e8] bg-white px-3.5 py-6 shadow-[0_4px_4px_rgb(0_0_0/0.02)] lg:px-6",
        className,
      )}
      {...props}
    >
      <h2 className="text-base leading-[27px] font-semibold text-[#322074] lg:text-lg">
        Top Expenses
      </h2>
      <ul className="mt-5 flex flex-col gap-8 lg:mt-6">
        {expenses.map((expense) => (
          <li key={expense.name} className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-[#f9f9f9]">
              <Image src={expense.logo} alt="" width={48} height={48} />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="flex items-center justify-between gap-8">
                <p className="text-sm leading-[21px] font-medium tracking-[-0.28px] text-[#01002e]">
                  {expense.name}
                </p>
                <p className="text-xs leading-[18px] font-medium text-black">
                  {expense.amount}
                </p>
              </div>
              <div className="relative flex h-3.5 items-center">
                <div className="h-2 w-full overflow-hidden rounded-[9px] bg-[#e8e8e8]">
                  <div
                    className="h-full rounded-full bg-[#7f6dc1]"
                    style={{ width: `${expense.spent}%` }}
                  />
                </div>
                <span
                  className="absolute inset-y-0 w-px bg-[#111827]"
                  style={{ left: `${expense.limit}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
