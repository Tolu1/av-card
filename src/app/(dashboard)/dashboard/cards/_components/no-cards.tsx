"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { fees, feesTotal } from "@/data/fees";
import { InfoIcon } from "@dashboard/_components/icons";
import { Note } from "@dashboard/_components/note";
import { PinInput } from "@dashboard/_components/pin-input";
import { PoweredByProvidus } from "@dashboard/_components/powered-by-providus";
import { SuccessMessage } from "@dashboard/_components/success-message";

type Step = "fees" | "pin";

type NoCardsProps = {
  onCreated: () => void;
  className?: string;
};

export function NoCards({ onCreated, className }: NoCardsProps) {
  const [step, setStep] = useState<Step>("fees");
  const [created, setCreated] = useState(false);

  return (
    <section
      className={cn(
        "relative overflow-hidden lg:h-[854px] lg:rounded-[20px] lg:bg-[#f2f4f7]/56",
        className,
      )}
    >
      <span className="absolute top-[185px] left-[141px] hidden h-14 w-[54px] rounded-full bg-[#a8fdc6] shadow-[1px_4px_30px_1px_#a8fdc6] xl:block">
        <Image
          src="/images/dashboard/spotify-logo.png"
          alt=""
          width={51}
          height={46}
          className="absolute top-[5px] left-0.5 h-[46px] w-[51px] object-cover"
        />
      </span>
      <Image
        src="/images/dashboard/customer-1.jpg"
        alt=""
        width={70}
        height={70}
        className="absolute top-[493px] left-[71px] hidden size-[70px] rounded-full object-cover xl:block"
      />
      <span className="absolute top-[130px] right-[126px] hidden h-[52px] w-[51px] rounded-full bg-[#efb5b5] shadow-[1px_4px_30px_1px_#efb5b5] xl:block">
        <Image
          src="/images/dashboard/netflix-logo.png"
          alt=""
          width={39}
          height={39}
          className="absolute top-[7px] left-1.5 size-[39px]"
        />
      </span>
      <span className="absolute top-[371px] right-[177px] hidden h-[66px] w-16 rounded-full bg-[#8bccff] shadow-[1px_2px_30px_1px_#8bccff] xl:block">
        <Image
          src="/images/dashboard/prime-video-logo.png"
          alt=""
          width={48}
          height={50}
          className="absolute top-2 left-2 h-[50px] w-12 object-cover"
        />
      </span>
      <Image
        src="/images/dashboard/customer-2.jpg"
        alt=""
        width={59}
        height={60}
        className="absolute top-[748px] right-[89px] hidden h-[60px] w-[59px] rounded-full bg-[#fdfdda] object-cover xl:block"
      />
      <div className="relative mx-auto flex flex-col lg:h-full lg:w-[670px] lg:bg-[#fcfcfd] lg:px-[23px]">
        <div className="relative h-[236px] overflow-hidden lg:-mx-[23px] lg:h-[253px]">
          <Image
            src="/images/dashboard/virtual-cards.png"
            alt=""
            width={304}
            height={354}
            priority
            className="absolute top-[-36.5px] left-[calc(50%-148.5px)] h-[314px] w-[269px] max-w-none -rotate-[49.15deg] lg:top-[-62.5px] lg:left-[calc(50%-152px)] lg:h-[354px] lg:w-[304px]"
          />
        </div>
        {step === "fees" && <FeesStep onProceed={() => setStep("pin")} />}
        {step === "pin" && <PinStep onContinue={() => setCreated(true)} />}
      </div>
      <Sheet
        open={created}
        onOpenChange={setCreated}
        onOpenChangeComplete={(open) => {
          if (!open) onCreated();
        }}
      >
        <SheetContent side="top" variant="modal">
          <div className="flex w-full flex-col rounded-b-[26px] bg-white px-[30px] pt-[35px] pb-[41px] sm:w-[528px]">
            <SuccessMessage
              title="Card Created Successfully!"
              description="Your virtual card is ready, but it’s not active yet. Activate your card now to start making payments"
              action="Activate Card"
            />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

function FeesStep({ onProceed }: { onProceed: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center text-center text-[#101828] lg:gap-[11px]">
        <h2 className="text-xl leading-8 font-bold lg:text-[26px]">
          No Card, No Fun — Let’s Fix That!
        </h2>
        <p className="text-xs leading-[26px] font-medium lg:text-base">
          You haven’t created a virtual card yet. Set one up in seconds and
          start enjoying fast, secure, and flexible payments anywhere online.
        </p>
      </div>
      <div className="mt-[21px] flex flex-col gap-9 lg:mt-6 lg:gap-7 lg:px-[93px]">
        <div className="flex flex-col gap-5 rounded-[5px] bg-[#f2f4f7] p-5 text-sm leading-[23px] text-[#101828]">
          <p className="flex items-center gap-2.5 font-semibold">
            <InfoIcon className="size-6 text-[#482ea6]" />
            You are Paying
          </p>
          <table className="w-full">
            <thead>
              <tr className="h-[35px] bg-[#e4e7ec] font-semibold">
                <th className="rounded-l-[4px] px-5 text-left">Description</th>
                <th className="rounded-r-[4px] pr-5 text-right">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr
                  key={fee.description}
                  className="h-[63px] border-b border-[#e4e7ec] nth-last-2:border-dashed"
                >
                  <td className="px-5 font-medium">{fee.description}</td>
                  <td className="pr-5 text-right font-semibold">
                    {fee.amount}
                  </td>
                </tr>
              ))}
              <tr className="h-[63px]">
                <td className="px-5 font-medium">Total</td>
                <td className="pr-5 text-right text-base leading-[26px] font-bold">
                  {feesTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button
          size="md"
          onClick={onProceed}
          className="mx-[22px] text-[#fcfcfd] lg:mx-0"
        >
          Proceed to Create Card
        </Button>
      </div>
      <PoweredByProvidus className="mt-5 text-[10px] lg:mt-[33px] lg:text-xs" />
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
      <div className="flex flex-col items-center text-center text-[#101828] lg:gap-[11px]">
        <h2 className="text-xl leading-8 font-bold lg:text-[26px]">
          Lock It In with a PIN
        </h2>
        <p className="text-xs leading-[26px] font-medium lg:max-w-[552px] lg:text-base">
          Choose a 4-digit code you’ll use to approve payments and keep your
          card secure.
        </p>
      </div>
      <form
        noValidate
        onSubmit={form.handleSubmit(onContinue)}
        className="mt-5 flex flex-col gap-7 lg:mt-6 lg:gap-[33px] lg:px-[93px]"
      >
        <div className="flex flex-col items-center gap-[30px] rounded-[5px] bg-[#f2f4f7] px-[30px] pt-[26px] pb-[17px] lg:mx-[13px] lg:rounded-[10px] lg:pt-[30px] lg:pb-[50px]">
          <Note className="w-full">
            This PIN will be your card PIN for making transactions. Please keep
            it safe
          </Note>
          <Controller
            name="pin"
            control={form.control}
            render={({ field }) => (
              <Field className="w-auto items-center">
                <FieldLabel htmlFor="new-card-pin" className="sr-only">
                  Card PIN
                </FieldLabel>
                <PinInput
                  id="new-card-pin"
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
          className="mx-[22px] text-[#fcfcfd] lg:mx-0"
        >
          Continue
        </Button>
      </form>
      <PoweredByProvidus className="mt-5 text-[10px] lg:mt-[33px] lg:text-xs" />
    </>
  );
}
