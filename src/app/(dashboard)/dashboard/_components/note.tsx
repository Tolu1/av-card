import { cn } from "@/lib/utils";
import { InfoIcon } from "./icons";

export function Note({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 rounded-[5px] bg-[#edeaf6] p-5 text-sm leading-[23px] text-[#101828]",
        className,
      )}
      {...props}
    >
      <p className="flex items-center gap-2.5 font-semibold">
        <InfoIcon className="size-6 text-[#482ea6]" />
        Please Note
      </p>
      <p className="font-medium">{children}</p>
    </div>
  );
}
