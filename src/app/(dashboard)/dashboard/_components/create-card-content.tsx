"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Field, FieldLabel } from "@/components/ui/field";
import { fees, feesTotal } from "@/data/fees";
import { cn } from "@/lib/utils";
import { InfoIcon } from "./icons";
import { Note } from "./note";
import { PinInput } from "./pin-input";
import { PoweredByProvidus } from "./powered-by-providus";
import { SuccessMessage } from "./success-message";

type Step = "fees" | "pin" | "success";

export function CreateCardContent() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("fees");

  return (
    <div
      className={cn(
        "flex w-full flex-col",
        step === "success"
          ? "rounded-b-[26px] bg-white px-[30px] pt-[35px] pb-[41px] sm:w-[528px]"
          : "rounded-b-[20px] bg-[#fcfcfd] px-3 pb-7 sm:w-[518px]",
      )}
    >
      {step !== "success" && (
        <div className="relative -mx-3 h-[204px] overflow-hidden">
          <Image
            src="/images/dashboard/virtual-cards.png"
            alt=""
            width={223}
            height={260}
            className="absolute top-[-30px] left-[calc(50%-128px)] h-[260px] w-[223px] max-w-none -rotate-[49.15deg]"
          />
        </div>
      )}
      {step === "fees" && <FeesStep onProceed={() => setStep("pin")} />}
      {step === "pin" && <PinStep onContinue={() => setStep("success")} />}
      {step === "success" && (
        <SuccessMessage
          title="Card Created Successfully!"
          description="Your virtual card is ready, but it’s not active yet. Activate your card now to start making payments"
          action="Activate Card"
          onAction={() => router.push("/dashboard/cards")}
        />
      )}
    </div>
  );
}

function FeesStep({ onProceed }: { onProceed: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center gap-[7px] text-center text-[#101828]">
        <SheetTitle className="text-xl leading-6 font-bold">
          Create a New Virtual Card
        </SheetTitle>
        <SheetDescription className="max-w-[420px] text-sm leading-[23px] font-medium text-[#101828]">
          Set up a new card in seconds to start spending securely and on your
          own terms.
        </SheetDescription>
      </div>
      <div className="mt-[17px] flex flex-col gap-7 px-7">
        <div className="flex flex-col gap-5 rounded-[5px] bg-[#f2f4f7] p-5 text-sm leading-[23px] text-[#101828]">
          <p className="flex items-center gap-2.5 font-semibold">
            <InfoIcon className="size-6 text-[#482ea6]" />
            You are Paying
          </p>
          <table className="w-full">
            <thead>
              <tr className="h-[35px] bg-[#e4e7ec] font-semibold">
                <th className="rounded-l-[4px] px-5 text-left">Description</th>
                <th className="rounded-r-[4px] px-5 text-right">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr
                  key={fee.description}
                  className="h-[63px] border-b border-[#e4e7ec]"
                >
                  <td className="px-5 font-medium">{fee.description}</td>
                  <td className="px-5 text-right font-semibold">
                    {fee.amount}
                  </td>
                </tr>
              ))}
              <tr className="h-[63px]">
                <td className="px-5 font-medium">Total</td>
                <td className="px-5 text-right text-base leading-[26px] font-bold">
                  {feesTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button size="md" onClick={onProceed} className="w-full text-[#fcfcfd]">
          Proceed to Create Card
        </Button>
      </div>
      <PoweredByProvidus className="mt-[33px]" />
    </>
  );
}

const pinSchema = z.object({
  pin: z.string().length(4),
});

type PinValues = z.infer<typeof pinSchema>;

function PinStep({ onContinue }: { onContinue: () => void }) {
  const form = useForm<PinValues>({
    resolver: zodResolver(pinSchema),
    defaultValues: { pin: "" },
    mode: "onChange",
  });

  return (
    <>
      <div className="flex flex-col items-center gap-[7px] text-center text-[#101828]">
        <SheetTitle className="text-xl leading-6 font-bold">
          Lock It In with a PIN
        </SheetTitle>
        <SheetDescription className="max-w-[420px] text-sm leading-[23px] font-medium text-[#101828]">
          Choose a 4-digit code you’ll use to approve payments and keep your
          card secure.
        </SheetDescription>
      </div>
      <form
        noValidate
        onSubmit={form.handleSubmit(onContinue)}
        className="mt-[17px] flex flex-col gap-[33px] px-7"
      >
        <div className="mx-[13px] flex flex-col items-center gap-[30px] rounded-[10px] bg-[#f2f4f7] px-[30px] pt-[30px] pb-[50px]">
          <Note className="w-full">
            This PIN will be your card PIN for making transactions. Please keep
            it safe
          </Note>
          <Controller
            name="pin"
            control={form.control}
            render={({ field }) => (
              <Field className="w-auto items-center">
                <FieldLabel htmlFor="create-card-pin" className="sr-only">
                  Card PIN
                </FieldLabel>
                <PinInput
                  id="create-card-pin"
                  value={field.value}
                  onChange={field.onChange}
                  autoFocus
                />
              </Field>
            )}
          />
        </div>
        <Button
          type="submit"
          size="md"
          disabled={!form.formState.isValid}
          className="w-full text-[#fcfcfd]"
        >
          Continue
        </Button>
      </form>
      <PoweredByProvidus className="mt-[33px]" />
    </>
  );
}
