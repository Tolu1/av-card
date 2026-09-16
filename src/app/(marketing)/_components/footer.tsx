import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";

const socials = [
  {
    name: "X",
    href: "https://x.com",
    icon: "/icons/marketing/x.svg",
    width: 25,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/avcard.io",
    icon: "/icons/marketing/instagram.svg",
    width: 24,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: "/icons/marketing/facebook.svg",
    width: 24,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#260554] px-[30px] pt-10 text-white">
      <div className="flex flex-col items-center gap-5 border-b border-primary pt-[70px] pb-[50px] text-center">
        <Link href="/">
          <Logo variant="white" className="h-[59.97px] w-[159.42px]" />
        </Link>
        <ul className="flex items-center gap-5">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={social.width}
                  height={24}
                />
              </a>
            </li>
          ))}
        </ul>
        <address className="flex flex-col gap-5 text-sm leading-[17.07px] not-italic sm:flex-row sm:flex-wrap sm:justify-center">
          <p>
            <span className="font-semibold">Contact Us:</span>{" "}
            <a href="mailto:info@avcard.io" className="hover:underline">
              info@avcard.io
            </a>
          </p>
          <p className="flex flex-col gap-1 sm:block">
            <span className="font-semibold">Our Office:</span> Plot 5a Furo
            Ezimora Street, Lekki Phase 1, Lagos
          </p>
        </address>
      </div>

      <div className="flex flex-col items-center gap-2.5 py-5 text-xs leading-[23.44px] sm:flex-row sm:justify-center sm:gap-5">
        <p className="order-last sm:order-first">
          © 2025 AVcard. - All Rights Reserved
        </p>
        <Link href="#" className="font-medium hover:underline">
          Terms of use
        </Link>
        <Link href="#" className="font-medium hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
