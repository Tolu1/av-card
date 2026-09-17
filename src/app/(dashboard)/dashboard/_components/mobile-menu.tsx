import Link from "next/link";
import { Logo } from "@/components/logo";
import { LogoutIcon, NotificationIcon } from "./icons";
import { NavLinks } from "./nav-links";
import { UserInfo } from "./user-info";

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      <Link
        href="/dashboard"
        onNavigate={onNavigate}
        className="self-start p-2.5"
      >
        <Logo className="h-6 w-[65px]" />
      </Link>
      <NavLinks
        onNavigate={onNavigate}
        className="mt-3.5 flex-col gap-[21px]"
        linkClassName="h-[43px]"
      />
      <div className="mt-auto flex flex-col gap-[9px]">
        <button
          type="button"
          className="flex h-[43px] items-center gap-[9px] text-sm leading-[21px] font-medium text-[#0a112f]"
        >
          <span className="flex size-10 items-center justify-center text-[#542c89]">
            <NotificationIcon className="size-6" />
          </span>
          Notifications
        </button>
        <Link
          href="/"
          className="flex h-[43px] items-center gap-[9px] text-sm leading-[21px] font-medium text-[#0a112f]"
        >
          <span className="flex size-10 items-center justify-center text-[#542c89]">
            <LogoutIcon className="size-6" />
          </span>
          Log Out
        </Link>
        <UserInfo className="h-[66px] border-t border-[#7f6dc1]" />
      </div>
    </>
  );
}
