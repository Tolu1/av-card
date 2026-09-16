"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit() {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col gap-[30px]">
      <h2 className="text-xl leading-[24.38px] font-semibold text-[#021f45]">
        Login to Avcard
      </h2>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[23px]"
      >
        <FieldGroup className="gap-5">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login-email" className="sr-only">
                  Email Address
                </FieldLabel>
                <Input
                  {...field}
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  aria-invalid={fieldState.invalid}
                  className="h-[46px] rounded-[4px] border-0 bg-[#fcfcfd] px-4 text-sm leading-[22.68px] shadow-[0_0_0_1px_#e4e7ec] placeholder:text-[#98a2b3]"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2.5">
                <FieldLabel htmlFor="login-password" className="sr-only">
                  Password
                </FieldLabel>
                <InputGroup className="h-[46px] rounded-[4px] border-0 bg-[#fcfcfd] pr-2.5 shadow-[0_0_0_1px_#e4e7ec]">
                  <InputGroupInput
                    {...field}
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Password"
                    aria-invalid={fieldState.invalid}
                    className="h-full px-4 text-sm leading-[22.68px] placeholder:text-[#98a2b3]"
                  />
                  <InputGroupAddon
                    align="inline-end"
                    className="pr-0 has-[>button]:mr-0"
                  >
                    <InputGroupButton
                      size="icon-xs"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((show) => !show)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-6 text-[#98a2b3]" />
                      ) : (
                        <Eye className="size-6 text-[#98a2b3]" />
                      )}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <Link
                  href="#"
                  className="text-xs leading-[19.44px] font-semibold text-[#7f6dc1]"
                >
                  Forgot Password
                </Link>
              </Field>
            )}
          />
        </FieldGroup>
        <Button
          type="submit"
          className="h-[38px] w-full cursor-pointer rounded-[4px] leading-[22.68px] text-[#fcfcfd] shadow-[0_0_0_2px_var(--color-primary)]"
        >
          Login
        </Button>
      </form>
      <p className="flex justify-center gap-[5px] text-sm leading-[22.68px] font-medium text-[#101828]">
        Don’t have an account
        <Link href="#" className="font-semibold text-primary">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
