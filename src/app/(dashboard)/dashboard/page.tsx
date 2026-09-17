import { BalanceCard } from "./_components/balance-card";
import { CashbackBanner } from "./_components/cashback-banner";
import { IntraCardTransfer } from "./_components/intra-card-transfer";
import { QuickActions } from "./_components/quick-actions";
import { RecentTransactions } from "./_components/recent-transactions";
import { TopExpenses } from "./_components/top-expenses";
import { Welcome } from "./_components/welcome";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-[13px] pt-[13px] pb-7 sm:px-16 lg:px-[60px] lg:pt-[46px] lg:pb-9">
      <Welcome />
      <div className="mt-3 flex flex-col lg:mt-[15px] xl:grid xl:grid-cols-[minmax(0,1fr)_517px] xl:items-start xl:gap-x-[18px]">
        <div className="contents xl:flex xl:flex-col">
          <BalanceCard />
          <QuickActions className="mt-[34px] lg:mt-[39px]" />
          <RecentTransactions className="order-1 mt-11 lg:mt-[26px] xl:order-none xl:mt-[13px]" />
        </div>
        <div className="contents xl:flex xl:flex-col">
          <CashbackBanner className="mt-9 xl:mt-0" />
          <IntraCardTransfer className="hidden lg:mt-[26px] lg:block" />
          <TopExpenses className="order-2 mt-[30px] lg:mt-[26px] xl:order-none" />
        </div>
      </div>
    </main>
  );
}
