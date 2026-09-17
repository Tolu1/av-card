import type { Expense } from "@/interfaces/expense";

export const expenses: Expense[] = [
  {
    name: "Netflix",
    logo: "/images/logos/netflix-icon.svg",
    amount: "₦1,000,000.00",
    spent: 75.8,
    limit: 86,
  },
  {
    name: "Apple Pay",
    logo: "/images/logos/apple-pay.svg",
    amount: "₦1,000,000.00",
    spent: 67,
    limit: 76.7,
  },
  {
    name: "Amazon",
    logo: "/images/logos/amazon-icon.svg",
    amount: "₦1,000,000.00",
    spent: 67,
    limit: 76.7,
  },
  {
    name: "Paypal",
    logo: "/images/logos/paypal.svg",
    amount: "₦1,000,000.00",
    spent: 60.9,
    limit: 71.9,
  },
];
