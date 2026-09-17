import { profile } from "@/data/profile";
import { KeypadIcon } from "./icons";

export function BasicProfile() {
  return (
    <>
      <dl className="flex flex-col gap-[30px] px-[30px] pt-10 pb-[30px] text-sm leading-[23px]">
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Name
          </dt>
          <dd className="font-semibold text-[#101828]">{profile.name}</dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Email Address
          </dt>
          <dd className="font-semibold text-[#101828]">{profile.email}</dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Gender
          </dt>
          <dd className="font-semibold text-[#101828]">{profile.gender}</dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Phone No
          </dt>
          <dd className="font-semibold text-[#101828]">{profile.phone}</dd>
        </div>
        <div className="flex gap-[30px]">
          <dt className="w-1/2 shrink-0 font-medium text-[#667085] sm:w-[240px]">
            Residential Address
          </dt>
          <dd className="font-semibold text-[#101828]">{profile.address}</dd>
        </div>
      </dl>
      <p className="flex min-h-[46px] items-center px-[30px] py-2.5 text-base leading-[26px] font-semibold text-[#101828] sm:py-0">
        Action
      </p>
      <button
        type="button"
        className="flex h-[52px] w-full items-center gap-2.5 border-t border-[#e4e7ec] px-[30px] text-sm leading-[23px] font-semibold text-[#72848b]"
      >
        <KeypadIcon className="size-8 rounded-full bg-[#e4e7ec] text-[#667085]" />
        Change Password
      </button>
    </>
  );
}
