"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type PinInputProps = Omit<
  React.ComponentProps<typeof InputOTP>,
  "maxLength" | "render" | "children"
>;

export function PinInput(props: PinInputProps) {
  return (
    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} {...props}>
      <InputOTPGroup className="gap-2.5">
        {[0, 1, 2, 3].map((index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className="h-14 w-12 rounded-[4px] border border-[#e4e7ec] bg-[#fcfcfd] text-sm font-bold text-[#101828] first:rounded-l-[4px] first:border-l last:rounded-r-[4px]"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}
