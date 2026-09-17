import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { LoginForm } from "./login-form";

export function LoginButton() {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(buttonVariants({ variant: "outline" }), "cursor-pointer")}
      >
        Login
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverBackdrop className="bg-black/20" />
        <PopoverPositioner sideOffset={37} collisionPadding={20}>
          <PopoverPopup
            aria-label="Login to Avcard"
            className="w-[341px] rounded-[10px] bg-white p-[30px] shadow-none ring-0"
          >
            <PopoverArrow className="-top-[29px] h-12 w-[51px] bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)]" />

            <LoginForm />
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
}
