"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { DocumentUpload } from "./document-upload";

export function KycDetails() {
  return (
    <>
      <dl className="flex flex-col gap-[30px] px-[30px] pt-10 pb-[30px] text-[15px] leading-[23px]">
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Bank Verification No (BVN)
          </dt>
          <dd>
            <StatusBadge status={profile.bvnStatus} />
          </dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Documents Uploaded
          </dt>
          <dd>
            <StatusBadge status={profile.documentsUploaded} />
          </dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Documents Approved
          </dt>
          <dd className="flex flex-col gap-2.5">
            <StatusBadge status={profile.documentsApproved} />
            <p className="w-full text-xs leading-4 text-[#912018] sm:w-[244px]">
              {profile.approvalNote}
            </p>
          </dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Customer Tier
          </dt>
          <dd className="text-sm leading-[23px] font-semibold text-[#101828]">
            {profile.tier}
            <button
              type="button"
              className="block text-xs leading-[19px] font-semibold text-[#72848b]"
            >
              Upgrade
            </button>
          </dd>
        </div>
      </dl>
      <p className="flex min-h-[46px] items-center border-b border-[#e4e7ec] px-[30px] py-2.5 text-base leading-[26px] font-semibold text-[#101828] sm:py-0">
        Documents Required to Complete KYC/Upgrade Tier
      </p>
      <div className="mt-[13px] flex flex-col border-b border-[#e4e7ec] pt-2.5 pb-5">
        <p className="px-[30px] text-base leading-[26px] font-bold text-[#101828]">
          Tier 2
        </p>
        <ul className="mx-[30px] mt-[30px] flex list-inside list-disc flex-col gap-2.5 rounded-md border border-[#b6abdb] bg-[#edeaf6] px-5 py-2.5 text-sm leading-[26px] text-[#101828] italic">
          <li>
            Maximum Transaction Limit -{" "}
            <span className="font-medium">₦1,000,000.00</span>
          </li>
          <li>Local Transactions</li>
        </ul>
        <DocumentUpload
          id="utility-bill"
          label="Utility Bill"
          className="mt-5"
        />
        <DocumentUpload
          id="birth-certificate"
          label="Birth Certificate"
          className="mt-[29px]"
        />
        <Button size="md" className="mx-[30px] mt-[33px] text-[#fcfcfd]">
          Submit Documents
        </Button>
      </div>
      <div className="mt-[13px] flex flex-col pt-2.5 pb-5 opacity-30">
        <p className="px-[30px] text-base leading-[26px] font-bold text-[#101828]">
          Tier 3
        </p>
        <ul className="mx-[30px] mt-[30px] flex list-inside list-disc flex-col gap-2.5 rounded-md border border-[#d0d5dd] bg-[#f2f4f7] px-5 py-2.5 text-sm leading-[26px] text-[#101828] italic">
          <li>
            Maximum Transaction Limit -{" "}
            <span className="font-medium">₦1,000,000.00</span>
          </li>
          <li>Local &amp; International Transactions</li>
        </ul>
        <Textarea
          disabled
          placeholder="Enter Residential Address"
          aria-label="Residential address"
          className="mx-[30px] mt-5 h-[85px] w-auto resize-none rounded-[4px] border-[#e4e7ec] bg-[#fcfcfd] px-4 py-2.5 text-sm leading-[23px] placeholder:text-[#98a2b3] md:text-sm"
        />
        <Button
          size="md"
          disabled
          className="mx-[30px] mt-[38px] text-[#fcfcfd]"
        >
          Submit
        </Button>
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      className={cn(
        "h-6 rounded-[90px] px-[7px] text-xs leading-4 font-semibold",
        status === "Declined"
          ? "bg-[#fde1e1] text-[#912018]"
          : "bg-[#d6f3e9] text-[#039855]",
      )}
    >
      {status}
    </Badge>
  );
}
