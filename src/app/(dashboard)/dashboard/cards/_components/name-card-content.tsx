"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { SuccessMessage } from "@dashboard/_components/success-message";

const nameSchema = z.object({
  name: z.string().trim().min(1),
});

type NameValues = z.infer<typeof nameSchema>;

export function NameCardContent() {
  const [savedName, setSavedName] = useState("");
  const form = useForm<NameValues>({
    resolver: zodResolver(nameSchema),
    defaultValues: { name: "" },
    mode: "onChange",
  });

  if (savedName) {
    return (
      <div className="flex w-full flex-col rounded-b-[26px] bg-white px-[30px] pt-[35px] pb-[41px] sm:w-[528px]">
        <SuccessMessage
          title="Card Name Saved Successfully!"
          description={`Your card has been named “${savedName}”. You can now start using it right away.`}
          action="Done"
        />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col rounded-b-[10px] bg-white pt-[30px] pb-[67px] sm:w-[412px]">
      <div className="flex flex-col items-center gap-1.5 px-[30px] text-center text-[#101828]">
        <SheetTitle className="text-xl leading-6 font-bold">
          Name Your Card
        </SheetTitle>
        <SheetDescription className="text-base leading-[26px] font-medium text-[#101828]">
          Give your card a unique name to help you organize your spending
        </SheetDescription>
      </div>
      <form
        noValidate
        onSubmit={form.handleSubmit((values) => setSavedName(values.name))}
        className="mt-[31px] flex flex-col gap-[54px]"
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="px-[19px]">
              <FieldLabel htmlFor="card-name" className="sr-only">
                Card Name
              </FieldLabel>
              <Input
                {...field}
                id="card-name"
                placeholder="Card Name"
                autoFocus
                aria-invalid={fieldState.invalid}
                className="h-14 rounded-[4px] border-[#e4e7ec] bg-[#fcfcfd] px-4 text-[15px] leading-[23px] text-[#101828] placeholder:text-sm placeholder:text-[#98a2b3] md:text-[15px]"
              />
            </Field>
          )}
        />
        <Button
          type="submit"
          size="md"
          disabled={!form.formState.isValid}
          className="mx-[30px] text-[#fcfcfd]"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
