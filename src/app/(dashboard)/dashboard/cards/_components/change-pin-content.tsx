"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Note } from "@dashboard/_components/note";
import { PinInput } from "@dashboard/_components/pin-input";
import { PoweredByProvidus } from "@dashboard/_components/powered-by-providus";
import { SuccessMessage } from "@dashboard/_components/success-message";

type Step = "current" | "new" | "success";

export function ChangePinContent() {
  const [step, setStep] = useState<Step>("current");

  if (step === "success") {
    return (
      <div className="flex w-full flex-col rounded-b-[26px] bg-white px-[30px] pt-[35px] pb-[41px] sm:w-[528px]">
        <SuccessMessage
          title="PIN Changed Successfully"
          description="Your new PIN is now active. You can continue using your card securely."
          action="Done"
        />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col rounded-b-[10px] bg-white pb-5 sm:w-[412px]">
      <div className="flex flex-col items-center gap-1.5 px-[30px] pt-[30px] text-center text-[#101828]">
        <SheetTitle className="text-xl leading-6 font-bold">
          Need a New PIN? Let’s Update It
        </SheetTitle>
        <SheetDescription className="text-base leading-[26px] font-medium text-[#101828]">
          {step === "current"
            ? "Enter your current card pin."
            : "Enter a new PIN to replace your current one."}
        </SheetDescription>
      </div>
      {step === "current" && (
        <CurrentPinStep onContinue={() => setStep("new")} />
      )}
      {step === "new" && <NewPinStep onChange={() => setStep("success")} />}
      <PoweredByProvidus className="mt-2.5" />
    </div>
  );
}

const pinSchema = z.object({
  pin: z.string().length(4),
});

type PinValues = z.infer<typeof pinSchema>;

function CurrentPinStep({ onContinue }: { onContinue: () => void }) {
  const form = useForm<PinValues>({
    resolver: zodResolver(pinSchema),
    defaultValues: { pin: "" },
    mode: "onChange",
  });

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onContinue)}
      className="mt-1 flex flex-col items-center gap-[30px] p-[30px]"
    >
      <Controller
        name="pin"
        control={form.control}
        render={({ field }) => (
          <Field className="w-auto items-center">
            <FieldLabel htmlFor="current-card-pin" className="sr-only">
              Current card PIN
            </FieldLabel>
            <PinInput
              id="current-card-pin"
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
  );
}

function NewPinStep({ onChange }: { onChange: () => void }) {
  const form = useForm<PinValues>({
    resolver: zodResolver(pinSchema),
    defaultValues: { pin: "" },
    mode: "onChange",
  });

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onChange)}
      className="flex flex-col items-center gap-[30px] p-[30px]"
    >
      <Note className="w-full">
        This PIN will be your card PIN for making transactions. Please keep it
        safe
      </Note>
      <Controller
        name="pin"
        control={form.control}
        render={({ field }) => (
          <Field className="w-auto items-center">
            <FieldLabel htmlFor="new-card-pin" className="sr-only">
              New card PIN
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
      <Button
        type="submit"
        size="md"
        disabled={!form.formState.isValid}
        className="w-full text-[#fcfcfd]"
      >
        Change Pin
      </Button>
    </form>
  );
}
