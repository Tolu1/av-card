"use client";

import { SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicProfile } from "./basic-profile";
import { CloseIcon } from "./icons";
import { KycDetails } from "./kyc-details";

export function ProfileContent() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      <SheetClose
        aria-label="Close profile"
        className="absolute top-7 right-[30px] flex size-9 items-center justify-center text-[#101828] lg:top-0.5 lg:right-auto lg:-left-[62px] lg:text-white"
      >
        <CloseIcon className="size-[27px]" />
      </SheetClose>
      <SheetTitle className="border-b border-[#e4e7ec] p-[30px] text-[26px] leading-8 font-bold text-[#101828]">
        Your Profile
      </SheetTitle>
      <Tabs
        defaultValue="basic"
        className="min-h-0 flex-1 gap-0 overflow-y-auto"
      >
        <TabsList className="mx-[30px] mt-10 w-fit shrink-0 rounded-[50px] border border-[#e4e7ec] bg-white p-0 group-data-horizontal/tabs:h-[43px]">
          <TabsTrigger
            value="basic"
            className="h-full rounded-none rounded-l-[50px] px-5 text-sm leading-[23px] font-semibold text-[#7f6dc1] data-active:bg-[#edeaf6] data-active:text-[#482ea6]"
          >
            Basic Profile
          </TabsTrigger>
          <TabsTrigger
            value="kyc"
            className="h-full rounded-none rounded-r-[50px] px-5 text-sm leading-[23px] font-semibold text-[#7f6dc1] data-active:bg-[#edeaf6] data-active:text-[#482ea6]"
          >
            KYC Details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <BasicProfile />
        </TabsContent>
        <TabsContent value="kyc">
          <KycDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
}
