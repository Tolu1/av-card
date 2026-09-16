"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <p className="text-base font-semibold text-purple">
        Thanks for subscribing! 🎉
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
      className="flex items-center gap-2.5 border-b border-[#dec6f5] px-[17px] pt-2.5 pb-[9px]"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="Type in Your Email Address Here"
        className="h-7 flex-1 border-0 bg-transparent px-0 text-sm leading-7 shadow-none placeholder:text-[#8e8e8e] focus-visible:ring-0 dark:bg-transparent"
      />
      <Button
        type="submit"
        className="h-[54px] bg-purple px-8 text-base leading-[25.62px] hover:bg-purple/90"
      >
        Subscribe
      </Button>
    </form>
  );
}
