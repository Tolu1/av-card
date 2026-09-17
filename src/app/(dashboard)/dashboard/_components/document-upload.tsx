"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { UploadIcon } from "./icons";

const maxSize = 5 * 1024 * 1024;
const accepted = ["image/jpeg", "image/png", "application/pdf"];

export function DocumentUpload({
  id,
  label,
  disabled,
  className,
}: {
  id: string;
  label: string;
  disabled?: boolean;
  className?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [error, setError] = useState("");

  return (
    <div
      className={cn(
        "flex flex-col gap-2 px-[30px] sm:flex-row sm:gap-[30px]",
        className,
      )}
    >
      <label
        htmlFor={id}
        className="text-[15px] leading-[23px] font-medium text-[#667085] sm:w-[240px] sm:shrink-0"
      >
        {label}
      </label>
      <div className="flex min-w-0 flex-col gap-1.5 sm:w-[240px]">
        <label
          htmlFor={id}
          className={cn(
            "flex min-h-[54px] flex-col justify-center rounded-[4px] border border-dashed border-[#d0d5dd] bg-[#fcfcfd] px-4 py-2 text-xs leading-[19px] font-medium sm:py-0",
            disabled ? "text-[#98a2b3]" : "cursor-pointer text-[#667085]",
          )}
        >
          {file ? (
            <span className="truncate text-[#101828]">{file.name}</span>
          ) : (
            <span className="text-[#98a2b3]">Click to upload Document</span>
          )}
          <span className="flex items-center gap-[7px]">
            <UploadIcon className="size-6 text-[#032a5c]" />
            {file ? "Replace file" : "Upload from device"}
          </span>
        </label>
        <Input
          ref={inputRef}
          id={id}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          disabled={disabled}
          aria-invalid={error !== ""}
          onChange={(event) => {
            const selected = event.target.files?.[0];
            if (!selected) return;
            if (!accepted.includes(selected.type)) {
              setFile(undefined);
              setError("Only JPG, PDF or PNG files are allowed");
            } else if (selected.size > maxSize) {
              setFile(undefined);
              setError("File must be smaller than 5mb");
            } else {
              setFile(selected);
              setError("");
            }
            if (inputRef.current) inputRef.current.value = "";
          }}
          className="sr-only size-px"
        />
        <p
          className={cn(
            "text-xs leading-[19px] font-medium",
            error ? "text-[#912018]" : "text-[#667085]",
          )}
        >
          {error ||
            "Uploads must be < 5mb and must be in JPG, PDF or PNG formats"}
        </p>
      </div>
    </div>
  );
}
