import Link from "next/link";
import { Logo } from "@/components/logo";
import { NotificationIcon } from "./icons";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { UserInfo } from "./user-info";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 h-[52px] border-b border-[#e3e8ef] bg-white lg:h-[88px] lg:border-[#e4e4e7]">
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between px-3 sm:px-16 lg:px-[60px]">
        <Link href="/dashboard">
          <Logo className="h-6 w-[65px] lg:h-9 lg:w-[95px]" />
        </Link>
        <NavLinks className="absolute left-1/2 hidden -translate-x-1/2 gap-8 lg:flex" />
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Notifications"
            className="flex size-10 items-center justify-center text-[#542c89]"
          >
            <NotificationIcon className="size-6" />
          </button>
          <UserInfo />
        </div>
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
