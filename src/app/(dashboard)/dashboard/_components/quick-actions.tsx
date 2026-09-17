import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CreateCardContent } from "./create-card-content";
import { TransferMoneyContent } from "./transfer-money-content";

export function QuickActions({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={className} {...props}>
      <h2 className="mb-[22px] hidden text-lg leading-[22px] font-semibold text-[#322074] lg:block">
        Quick Actions
      </h2>
      <div className="flex gap-[13px] lg:gap-3">
        <Sheet>
          <SheetTrigger className="flex h-[58px] min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-[#f2f4f7] bg-[#eee9fe] px-1.5 text-left text-[11px] leading-[18px] font-semibold text-[#462fc2] lg:h-[77px] lg:gap-3 lg:rounded-[14px] lg:border-[#0357ee]/5 lg:bg-[#c7b9fc]/31 lg:px-4 lg:text-base lg:leading-[21px] lg:font-medium lg:tracking-[0.32px] lg:text-[#666666]">
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#c8b7ff] lg:size-[46px]">
              <Image
                src="/icons/dashboard/create-card.svg"
                alt=""
                width={46}
                height={46}
                className="size-[34px] lg:size-[46px]"
              />
            </span>
            Create New Card
          </SheetTrigger>
          <SheetContent side="top" variant="modal">
            <CreateCardContent />
          </SheetContent>
        </Sheet>
        <Link
          href="/dashboard/cards"
          className="flex h-[58px] min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-[#f2f4f7] bg-[#ebf5fe] px-1.5 text-left text-[11px] leading-[18px] font-semibold text-[#462fc2] lg:h-[77px] lg:gap-3 lg:rounded-[14px] lg:border-[#0357ee]/5 lg:px-4 lg:text-base lg:leading-[21px] lg:font-medium lg:tracking-[0.32px] lg:text-[#666666]"
        >
          <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#cce7ff] lg:size-[46px]">
            <Image
              src="/icons/dashboard/view-cards.svg"
              alt=""
              width={46}
              height={46}
              className="size-[34px] lg:size-[46px]"
            />
          </span>
          View All Cards
        </Link>
        <Sheet>
          <SheetTrigger className="flex h-[58px] min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-[#f2f4f7] bg-[#e0e9fc] px-1.5 text-left text-[11px] leading-[18px] font-semibold text-[#462fc2] lg:h-[77px] lg:gap-3 lg:rounded-[14px] lg:border-[#0357ee]/5 lg:px-4 lg:text-base lg:leading-[21px] lg:font-medium lg:tracking-[0.32px] lg:text-[#666666]">
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#bbd1ff] lg:size-[46px]">
              <Image
                src="/icons/dashboard/money-with-wings.png"
                alt=""
                width={27}
                height={28}
                className="size-5 lg:h-7 lg:w-[27px]"
              />
            </span>
            Transfer Money
          </SheetTrigger>
          <SheetContent side="top" variant="modal">
            <TransferMoneyContent />
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
