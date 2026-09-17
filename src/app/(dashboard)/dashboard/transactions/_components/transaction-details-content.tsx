import { Badge } from "@/components/ui/badge";
import { SheetTitle } from "@/components/ui/sheet";
import { formatShortDate } from "@/lib/format";
import type { Transaction } from "@/interfaces/transaction";
import { PoweredByProvidus } from "@dashboard/_components/powered-by-providus";

export function TransactionDetailsContent({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <div className="flex w-full flex-col rounded-b-[20px] bg-[#fcfcfd] px-[21px] pt-[19px] pb-[19px] sm:w-[461px]">
      <SheetTitle className="text-center text-xl leading-6 font-bold text-[#101828]">
        Transaction Details
      </SheetTitle>
      <dl className="mt-[34px] flex flex-col gap-6 text-[15px] leading-[23px] font-medium text-[#667085]">
        <div className="flex items-center justify-between gap-4">
          <dt>Amount</dt>
          <dd className="text-sm leading-[19px] font-semibold text-[#101828]">
            {transaction.amount}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt>Date</dt>
          <dd className="text-sm leading-[19px] font-semibold text-[#101828]">
            {formatShortDate(transaction.date)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt>Recipient</dt>
          <dd className="text-sm leading-[23px] font-semibold text-[#101828]">
            {transaction.recipient}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt>Status</dt>
          <dd>
            <Badge className="h-6 rounded-[90px] bg-[#ccfbe0] px-[7px] text-xs leading-4 font-semibold text-[#008237] capitalize">
              {transaction.status}
            </Badge>
          </dd>
        </div>
      </dl>
      <PoweredByProvidus className="mt-[34px]" />
    </div>
  );
}
