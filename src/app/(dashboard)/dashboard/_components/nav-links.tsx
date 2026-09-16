"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CardsIcon, DashboardIcon, TransactionIcon } from "./icons";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: DashboardIcon },
  { href: "/dashboard/cards", label: "Cards", icon: CardsIcon },
  {
    href: "/dashboard/transactions",
    label: "Transaction",
    icon: TransactionIcon,
  },
] as const;

type NavLinksProps = React.ComponentProps<"nav"> & {
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({
  linkClassName,
  onNavigate,
  className,
  ...props
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex", className)} {...props}>
      {links.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            onNavigate={onNavigate}
            className={cn(
              "flex h-10 items-center gap-1.5 rounded-[32px] border px-3 text-sm leading-[22px] font-medium transition-colors",
              active
                ? "border-[#e4e4e7] bg-[#fafafa] text-[#542c89]"
                : "border-transparent text-[#9096a2] hover:text-[#542c89]",
              linkClassName,
            )}
          >
            <Icon className="size-6" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
