"use client";

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { ProfileContent } from "./profile-content";

export function UserInfo({
  className,
  ...props
}: React.ComponentProps<typeof SheetTrigger>) {
  return (
    <Sheet>
      <SheetTrigger
        className={cn("flex items-center gap-3 text-left", className)}
        {...props}
      >
        <Image
          src={profile.avatar}
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-full"
        />
        <div className="flex flex-col gap-px">
          <p className="text-sm leading-[21px] font-medium text-[#0a112f]">
            {profile.name}
          </p>
          <p className="text-xs leading-[18px] text-[#70707a]">
            {profile.email}
          </p>
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="border-0 bg-transparent p-0 shadow-none data-[side=right]:w-full data-[side=right]:sm:max-w-[570px]"
      >
        <ProfileContent />
      </SheetContent>
    </Sheet>
  );
}
