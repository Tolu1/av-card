import { cn } from "@/lib/utils";

export function SuccessAnimation({ className }: { className?: string }) {
  return (
    <span className={cn("grid aspect-square place-items-center", className)}>
      <span className="col-start-1 row-start-1 size-[62%] animate-success-ring rounded-full border-[3px] border-[#00e7c1]" />
      <span className="col-start-1 row-start-1 grid size-[45%] animate-success-circle place-items-center rounded-full bg-[#00e7c1]">
        <svg
          viewBox="0 0 48 36"
          fill="none"
          aria-hidden="true"
          className="w-[47%]"
        >
          <path
            d="M3 19.5L18 32L45 4"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="60"
            className="animate-success-check"
          />
        </svg>
      </span>
    </span>
  );
}
