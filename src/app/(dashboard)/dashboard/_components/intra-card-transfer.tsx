"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { card } from "@/data/cards";
import { CardOption } from "./card-option";
import { SuccessAnimation } from "./success-animation";
import { CaretDownIcon } from "./icons";
import { PinInput } from "./pin-input";

type Step = "form" | "pin" | "success";

export function IntraCardTransfer({
  className,
  ...props
}: React.ComponentProps<"section">) {
  const [step, setStep] = useState<Step>("form");

  useEffect(() => {
    if (step !== "success") return;
    const timeout = setTimeout(() => setStep("form"), 3000);
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <section
      className={cn(
        "min-h-[184px] rounded-2xl border-[0.73px] border-[#e8e8e8] bg-white shadow-[0_4px_4px_rgb(0_0_0/0.02)] lg:h-[220px]",
        className,
      )}
      {...props}
    >
      {step === "form" && <TransferForm onTransfer={() => setStep("pin")} />}
      {step === "pin" && <PinForm onTransfer={() => setStep("success")} />}
      {step === "success" && (
        <div className="flex h-full flex-col items-center pt-2.5 lg:pt-5">
          <SuccessAnimation className="size-[133px] lg:size-[149px]" />
          <p className="mt-1.5 text-[17px] leading-6 font-bold text-[#322074] lg:mt-2.5 lg:text-xl">
            Transaction Successful!
          </p>
        </div>
      )}
    </section>
  );
}

const transferSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/)
    .refine((amount) => Number(amount) > 0),
});

type TransferValues = z.infer<typeof transferSchema>;

function TransferForm({ onTransfer }: { onTransfer: () => void }) {
  const form = useForm<TransferValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: { from: card.id, to: card.id, amount: "" },
  });

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onTransfer)}
      className="flex flex-col px-2.5 pt-[17px] pb-[18px] lg:px-7 lg:pt-[27px] lg:pb-9"
    >
      <h2 className="text-sm leading-[27px] font-semibold text-[#322074] lg:text-lg">
        Intra-Card Transfer
      </h2>
      <div className="mt-[18px] grid grid-cols-2 gap-x-3 min-[440px]:flex min-[440px]:flex-wrap min-[440px]:gap-x-[15px] min-[440px]:gap-y-4 lg:mt-5 lg:justify-between lg:gap-x-3">
        <Controller
          name="from"
          control={form.control}
          render={({ field }) => (
            <Field
              orientation="horizontal"
              className="w-auto max-[439px]:flex-col max-[439px]:items-start max-[439px]:gap-1 min-[440px]:gap-3 lg:gap-2"
            >
              <FieldLabel
                htmlFor="intra-card-from"
                className="text-[13px] leading-[27px] font-medium text-black lg:text-[15px]"
              >
                From
              </FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                items={{
                  [card.id]: (
                    <CardOption className="mr-0 h-[17px] w-[29px] lg:mr-[5px] lg:h-[19px] lg:w-[31px]" />
                  ),
                }}
              >
                <SelectTrigger
                  id="intra-card-from"
                  icon={
                    <CaretDownIcon className="-ml-1 size-[22px] text-[#667085] lg:ml-0 lg:size-6" />
                  }
                  className="w-full gap-0 rounded-lg border-[#482ea6] px-0 pr-px text-xs leading-[26px] font-semibold text-[#667085] data-[size=default]:h-7 min-[440px]:w-[148px] lg:w-[181px] lg:px-[5px] lg:text-sm lg:data-[size=default]:h-[33px]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={card.id}>
                    <CardOption className="mr-0 h-[17px] w-[29px] lg:mr-[5px] lg:h-[19px] lg:w-[31px]" />
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
          )}
        />
        <Controller
          name="to"
          control={form.control}
          render={({ field }) => (
            <Field
              orientation="horizontal"
              className="w-auto max-[439px]:flex-col max-[439px]:items-start max-[439px]:gap-1 min-[440px]:gap-3 lg:gap-2"
            >
              <FieldLabel
                htmlFor="intra-card-to"
                className="text-[13px] leading-[27px] font-medium text-black lg:text-[15px]"
              >
                To
              </FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                items={{
                  [card.id]: (
                    <CardOption className="mr-0 h-[17px] w-[29px] lg:mr-[5px] lg:h-[19px] lg:w-[31px]" />
                  ),
                }}
              >
                <SelectTrigger
                  id="intra-card-to"
                  icon={
                    <CaretDownIcon className="-ml-1 size-[22px] text-[#667085] lg:ml-0 lg:size-6" />
                  }
                  className="w-full gap-0 rounded-lg border-[#482ea6] px-0 pr-px text-xs leading-[26px] font-semibold text-[#667085] data-[size=default]:h-7 min-[440px]:w-[148px] lg:w-[181px] lg:px-[5px] lg:text-sm lg:data-[size=default]:h-[33px]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={card.id}>
                    <CardOption className="mr-0 h-[17px] w-[29px] lg:mr-[5px] lg:h-[19px] lg:w-[31px]" />
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
          )}
        />
      </div>
      <div className="mt-4 grid grid-cols-2 items-end gap-x-3 min-[440px]:mt-[25px] min-[440px]:flex min-[440px]:flex-wrap min-[440px]:items-center min-[440px]:justify-between min-[440px]:gap-4 lg:mt-8 lg:pl-1.5">
        <Controller
          name="amount"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              orientation="horizontal"
              className="w-auto max-[439px]:flex-col max-[439px]:items-start max-[439px]:gap-1 min-[440px]:gap-3 lg:gap-2"
            >
              <FieldLabel
                htmlFor="intra-card-amount"
                className="text-[13px] leading-[27px] font-medium text-black lg:text-[15px]"
              >
                Amount
              </FieldLabel>
              <Input
                {...field}
                id="intra-card-amount"
                inputMode="decimal"
                placeholder="Enter Amount"
                aria-invalid={fieldState.invalid}
                className="h-7 w-full rounded-lg border-[#482ea6] px-3 text-xs leading-[27px] placeholder:text-[#d0d5dd] min-[440px]:w-[148px] md:text-xs lg:h-[33px] lg:w-[181px] lg:px-2"
              />
            </Field>
          )}
        />
        <Button
          type="submit"
          size="md"
          className="h-[39px] w-full rounded-xl text-[15px] leading-[18px] font-medium tracking-[0.45px] min-[440px]:w-[148px] lg:h-[43px] lg:w-[164px] lg:rounded-[15px] lg:text-base lg:leading-[19px] lg:tracking-[0.48px]"
        >
          Transfer
        </Button>
      </div>
    </form>
  );
}

const pinSchema = z.object({
  pin: z.string().length(4),
});

type PinValues = z.infer<typeof pinSchema>;

function PinForm({ onTransfer }: { onTransfer: () => void }) {
  const form = useForm<PinValues>({
    resolver: zodResolver(pinSchema),
    defaultValues: { pin: "" },
    mode: "onChange",
  });

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onTransfer)}
      className="flex flex-col items-center px-2.5 pt-1.5 text-center text-[#322074] lg:px-[15px] lg:pt-[13px]"
    >
      <h2 className="text-sm leading-[23px] font-semibold lg:text-lg lg:leading-[27px]">
        Enter Your 4 Digit Pin
      </h2>
      <p className="text-xs leading-[27px] lg:text-[13px]">
        Enter your PIN to proceed with the transaction
      </p>
      <Controller
        name="pin"
        control={form.control}
        render={({ field }) => (
          <Field className="mt-2 w-auto items-center lg:mt-[15px]">
            <FieldLabel htmlFor="intra-card-pin" className="sr-only">
              PIN
            </FieldLabel>
            <PinInput
              id="intra-card-pin"
              value={field.value}
              onChange={field.onChange}
              autoFocus
            />
          </Field>
        )}
      />
      <Button
        type="submit"
        size="md"
        disabled={!form.formState.isValid}
        className="mt-[15px] h-[39px] w-[213px] rounded-xl text-[15px] leading-[18px] font-medium tracking-[0.45px] lg:mt-6 lg:h-[43px] lg:w-[209px] lg:rounded-[15px] lg:text-base lg:leading-[19px] lg:tracking-[0.48px]"
      >
        Transfer
      </Button>
    </form>
  );
}
