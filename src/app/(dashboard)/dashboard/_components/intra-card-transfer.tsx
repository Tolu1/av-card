"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
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
        "rounded-2xl border-[0.73px] border-[#e8e8e8] bg-white shadow-[0_4px_4px_rgb(0_0_0/0.02)] lg:h-[220px]",
        className,
      )}
      {...props}
    >
      {step === "form" && <TransferForm onTransfer={() => setStep("pin")} />}
      {step === "pin" && <PinForm onTransfer={() => setStep("success")} />}
      {step === "success" && (
        <div className="flex h-full flex-col items-center pt-5">
          <Image
            src="/images/dashboard/success-placeholder.png"
            alt=""
            width={149}
            height={150}
            className="h-[150px] w-[149px] object-cover"
          />
          <p className="mt-2.5 text-xl leading-6 font-bold text-[#322074]">
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
      className="flex flex-col px-7 pt-[27px] pb-9"
    >
      <h2 className="text-lg leading-[27px] font-semibold text-[#322074]">
        Intra-Card Transfer
      </h2>
      <div className="mt-5 flex flex-wrap justify-between gap-x-3 gap-y-4">
        <Controller
          name="from"
          control={form.control}
          render={({ field }) => (
            <Field orientation="horizontal" className="w-auto gap-2">
              <FieldLabel
                htmlFor="intra-card-from"
                className="text-[15px] leading-[27px] font-medium text-black"
              >
                From
              </FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                items={{ [card.id]: <CardOption /> }}
              >
                <SelectTrigger
                  id="intra-card-from"
                  icon={<CaretDownIcon className="size-6 text-[#667085]" />}
                  className="w-[181px] gap-0 rounded-lg border-[#482ea6] px-[5px] text-sm leading-[26px] font-semibold text-[#667085] data-[size=default]:h-[33px]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={card.id}>
                    <CardOption />
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
            <Field orientation="horizontal" className="w-auto gap-2">
              <FieldLabel
                htmlFor="intra-card-to"
                className="text-[15px] leading-[27px] font-medium text-black"
              >
                To
              </FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                items={{ [card.id]: <CardOption /> }}
              >
                <SelectTrigger
                  id="intra-card-to"
                  icon={<CaretDownIcon className="size-6 text-[#667085]" />}
                  className="w-[181px] gap-0 rounded-lg border-[#482ea6] px-[5px] text-sm leading-[26px] font-semibold text-[#667085] data-[size=default]:h-[33px]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={card.id}>
                    <CardOption />
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
          )}
        />
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pl-1.5">
        <Controller
          name="amount"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field orientation="horizontal" className="w-auto gap-2">
              <FieldLabel
                htmlFor="intra-card-amount"
                className="text-[15px] leading-[27px] font-medium text-black"
              >
                Amount
              </FieldLabel>
              <Input
                {...field}
                id="intra-card-amount"
                inputMode="decimal"
                placeholder="Enter Amount"
                aria-invalid={fieldState.invalid}
                className="h-[33px] w-[181px] rounded-lg border-[#482ea6] px-2 text-xs leading-[27px] placeholder:text-[#d0d5dd] md:text-xs"
              />
            </Field>
          )}
        />
        <Button
          type="submit"
          size="md"
          className="w-[164px] text-base leading-[19px] font-medium tracking-[0.48px]"
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
      className="flex flex-col items-center px-[15px] pt-[13px] text-center text-[#322074]"
    >
      <h2 className="text-lg leading-[27px] font-semibold">
        Enter Your 4 Digit Pin
      </h2>
      <p className="text-[13px] leading-[27px]">
        Enter your PIN to proceed with the transaction
      </p>
      <Controller
        name="pin"
        control={form.control}
        render={({ field }) => (
          <Field className="mt-[15px] w-auto items-center">
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
        className="mt-6 w-[209px] text-base leading-[19px] font-medium tracking-[0.48px]"
      >
        Transfer
      </Button>
    </form>
  );
}
