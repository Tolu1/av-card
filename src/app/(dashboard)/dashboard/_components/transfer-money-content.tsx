"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { banks, verifiedAccountName } from "@/data/banks";
import { card } from "@/data/cards";
import { CardOption } from "./card-option";
import { CaretDownIcon, InfoIcon } from "./icons";
import { Note } from "./note";
import { PinInput } from "./pin-input";
import { PoweredByProvidus } from "./powered-by-providus";
import { SuccessMessage } from "./success-message";

const transferSchema = z.object({
  card: z.string().min(1, "Select a card"),
  accountNumber: z
    .string()
    .regex(/^\d{10}$/, "Enter a 10-digit account number"),
  bank: z.string().min(1, "Select a bank"),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount")
    .refine((amount) => Number(amount) > 0, "Enter a valid amount"),
});

type TransferValues = z.infer<typeof transferSchema>;

type Step = "form" | "confirm" | "pin" | "success";

export function TransferMoneyContent() {
  const [step, setStep] = useState<Step>("form");
  const form = useForm<TransferValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: { card: card.id, accountNumber: "", bank: "", amount: "" },
  });

  return (
    <div
      className={cn(
        "flex w-full flex-col",
        step === "form" &&
          "rounded-b-[20px] bg-[#fcfcfd] px-3 pt-[27px] pb-[23px] sm:w-[518px]",
        (step === "confirm" || step === "pin") &&
          "rounded-b-[10px] border border-[#e4e7ec] bg-white px-[30px] pt-[30px] pb-5 sm:w-[412px]",
        step === "success" &&
          "rounded-b-[26px] bg-white px-[30px] pt-[35px] pb-[42px] sm:w-[528px]",
      )}
    >
      {step === "form" && (
        <TransferForm form={form} onNext={() => setStep("confirm")} />
      )}
      {step === "confirm" && (
        <ConfirmStep
          values={form.getValues()}
          onConfirm={() => setStep("pin")}
        />
      )}
      {step === "pin" && <PinStep onContinue={() => setStep("success")} />}
      {step === "success" && (
        <SuccessMessage
          title="Transaction Processed Successfully"
          description="The payment was successful. You can view the details in your transaction history."
          action="Go Back"
        />
      )}
    </div>
  );
}

type TransferFormProps = {
  form: ReturnType<typeof useForm<TransferValues>>;
  onNext: () => void;
};

function TransferForm({ form, onNext }: TransferFormProps) {
  const [accountNumber, bank] = useWatch({
    control: form.control,
    name: ["accountNumber", "bank"],
  });
  const verified = /^\d{10}$/.test(accountNumber) && bank !== "";

  return (
    <>
      <div className="flex flex-col items-center gap-2 px-4 text-center text-[#101828] sm:px-[70px]">
        <SheetTitle className="flex items-center gap-3 text-xl leading-6 font-bold">
          Transfer Money
          <Image
            src="/icons/dashboard/money-with-wings.png"
            alt=""
            width={27}
            height={28}
          />
        </SheetTitle>
        <SheetDescription className="flex items-center gap-1 text-sm leading-[23px] font-semibold text-[#101828]">
          <InfoIcon className="size-6 shrink-0 text-[#482ea6]" />
          <span>
            <span className="text-xs text-[#667085]">
              Please note, you can only transfer to accounts linked to
            </span>{" "}
            Virtue Anoisike Precious
          </span>
        </SheetDescription>
      </div>
      <form
        noValidate
        onSubmit={form.handleSubmit(onNext)}
        className="mt-[17px] flex flex-col"
      >
        <FieldGroup className="gap-[18px] px-[18px]">
          <Controller
            name="card"
            control={form.control}
            render={({ field }) => (
              <Field className="gap-1">
                <FieldLabel
                  htmlFor="transfer-card"
                  className="text-[13px] leading-[23px] font-semibold text-[#667085]"
                >
                  Select Card
                </FieldLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  items={{ [card.id]: <CardOption /> }}
                >
                  <SelectTrigger
                    id="transfer-card"
                    icon={<CaretDownIcon className="size-6 text-[#667085]" />}
                    className="w-full rounded-lg border-[#e6e7fe] bg-white px-2.5 text-sm leading-[26px] font-semibold text-[#667085] data-[size=default]:h-11"
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
            name="accountNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="transfer-account-number"
                  className="text-[13px] leading-[23px] font-semibold text-[#667085]"
                >
                  Enter Account Number
                </FieldLabel>
                <Input
                  {...field}
                  id="transfer-account-number"
                  inputMode="numeric"
                  maxLength={10}
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-lg border-[#e6e7fe] bg-white px-4 text-sm leading-[26px] font-semibold text-[#667085] md:text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="bank"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="transfer-bank"
                  className="text-[13px] leading-[23px] font-semibold text-[#667085]"
                >
                  Select Bank
                </FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="transfer-bank"
                    aria-invalid={fieldState.invalid}
                    icon={<CaretDownIcon className="size-6 text-[#667085]" />}
                    className="w-full rounded-lg border-[#e6e7fe] bg-white pr-2.5 pl-4 text-sm leading-[26px] font-semibold text-[#667085] data-[size=default]:h-11"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bankName) => (
                      <SelectItem key={bankName} value={bankName}>
                        {bankName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {verified && (
                  <p className="mt-3 flex h-[27px] items-center gap-2 rounded-lg border border-[#b6abdb] bg-[#edeaf6] px-5 text-sm leading-[26px] text-[#101828] italic">
                    <Image
                      src="/icons/dashboard/verified.svg"
                      alt=""
                      width={25}
                      height={25}
                    />
                    {verifiedAccountName}
                  </p>
                )}
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="amount"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="transfer-amount"
                  className="text-[13px] leading-[23px] font-semibold text-[#667085]"
                >
                  Enter Amount
                </FieldLabel>
                <Input
                  {...field}
                  id="transfer-amount"
                  inputMode="decimal"
                  aria-invalid={fieldState.invalid}
                  className="h-11 rounded-lg border-[#e6e7fe] bg-white px-4 text-sm leading-[26px] font-semibold text-[#667085] md:text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <div className="mt-[29px] flex flex-col gap-[15px] px-7">
          <Button type="submit" size="md" className="w-full text-[#fcfcfd]">
            Next
          </Button>
          <PoweredByProvidus />
        </div>
      </form>
    </>
  );
}

type ConfirmStepProps = {
  values: TransferValues;
  onConfirm: () => void;
};

function ConfirmStep({ values, onConfirm }: ConfirmStepProps) {
  const rows = [
    { label: "Bank", value: values.bank },
    { label: "Account Number", value: values.accountNumber },
    { label: "Amount", value: formatAmount(values.amount) },
    { label: "Verified Name", value: verifiedAccountName },
  ];

  return (
    <>
      <div className="relative">
        <SheetTitle className="text-center text-xl leading-6 font-bold text-[#101828]">
          Confirm Information
        </SheetTitle>
        <SheetClose
          aria-label="Close"
          className="absolute top-px -right-[13px] flex size-[21px] items-center justify-center"
        >
          <Image
            src="/icons/dashboard/close.svg"
            alt=""
            width={21}
            height={21}
          />
        </SheetClose>
      </div>
      <Note className="mt-[27px] pt-[9px]">
        kindly review the transfer details before proceeding, as successful
        transfers cannot be reversed.
      </Note>
      <dl className="mt-[31px] flex flex-col gap-5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[163px_1fr] gap-x-[54px]"
          >
            <dt className="text-base leading-[23px] font-medium text-[#667085]">
              {row.label}
            </dt>
            <dd className="text-[15px] leading-[23px] font-semibold text-[#101828]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-[35px] flex flex-col gap-[15px]">
        <Button
          size="md"
          onClick={onConfirm}
          className="mx-4 w-auto text-[#fcfcfd]"
        >
          Confirm payment
        </Button>
        <PoweredByProvidus />
      </div>
    </>
  );
}

function formatAmount(amount: string) {
  return `₦${Number(amount).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
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
      <SheetTitle className="text-center text-xl leading-6 font-bold text-[#101828]">
        Enter Your Pin
      </SheetTitle>
      <form
        noValidate
        onSubmit={form.handleSubmit(onContinue)}
        className="mt-[30px] flex flex-col gap-[30px]"
      >
        <Controller
          name="pin"
          control={form.control}
          render={({ field }) => (
            <Field className="items-center">
              <FieldLabel htmlFor="transfer-pin" className="sr-only">
                PIN
              </FieldLabel>
              <PinInput
                id="transfer-pin"
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
          className="w-full text-[#fcfcfd]"
        >
          Continue
        </Button>
      </form>
      <PoweredByProvidus className="mt-10" />
    </>
  );
}
