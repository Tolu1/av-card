import type { Card, CardDetails, FundingAccount } from "@/interfaces/card";

export const card: Card = {
  id: "4567",
  maskedNumber: "**********4567",
  balance: "₦1,100,000.00",
  exchangeRate: "$1 = ₦1,606.78",
};

export const cardDetails: CardDetails = {
  maskedNumber: "9203***********0902",
  number: "9203581746290902",
  pin: "1234",
  cvv: "343",
  expiryDate: "02/24",
  status: "Active",
  cardName: "John Doe",
  accountNumber: "5038849837",
};

export const fundingAccount: FundingAccount = {
  bank: "Providus Bank",
  accountNumber: "12345678090",
  cardName: "Virtue Anoisike",
};
