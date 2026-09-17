"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "./icons";
import { MobileMenu } from "./mobile-menu";

export function MobileMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <DrawerTrigger aria-label="Open menu" className="text-[#542c89]">
        <MenuIcon className="size-7" />
      </DrawerTrigger>
      <DrawerContent className="w-[271px] pt-12 pr-2.5 pb-2 pl-[11px] data-[swipe-direction=right]:rounded-l-[15px] data-[swipe-direction=right]:border-l-0">
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        <MobileMenu onNavigate={() => setOpen(false)} />
      </DrawerContent>
    </Drawer>
  );
}
