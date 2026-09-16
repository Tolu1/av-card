import Link from "next/link";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginPopover } from "./login-popover";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 flex w-full items-center justify-between px-5 py-6 sm:px-16 lg:static lg:px-0">
      <Link href="/">
        <Logo className="h-[29px] w-[76px] lg:h-[51.16px] lg:w-[136px]" />
      </Link>
      <nav className="flex items-center gap-2.5">
        <Link
          href="#"
          className={cn(
            buttonVariants(),
            "shadow-[0_0_0_1px_var(--color-primary)]",
          )}
        >
          Sign Up - It&rsquo;s Free!
        </Link>
        <LoginPopover />
      </nav>
    </header>
  );
}
