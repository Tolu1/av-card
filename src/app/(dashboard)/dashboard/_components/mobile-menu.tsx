"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LogoutIcon, MenuIcon, NotificationIcon } from "./icons";
import { NavLinks } from "./nav-links";
import { UserInfo } from "./user-info";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <DrawerTrigger aria-label="Open menu" className="text-[#542c89]">
        <MenuIcon className="size-7" />
      </DrawerTrigger>
      <DrawerContent className="w-[271px] pt-12 pr-2.5 pb-2 pl-[11px] data-[swipe-direction=right]:rounded-l-[15px] data-[swipe-direction=right]:border-l-0">
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        <Link
          href="/dashboard"
          onNavigate={() => setOpen(false)}
          className="self-start p-2.5"
        >
          <Logo className="h-6 w-[65px]" />
        </Link>
        <NavLinks
          onNavigate={() => setOpen(false)}
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
      </DrawerContent>
    </Drawer>
  );
}
