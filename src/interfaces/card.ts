export interface Card {
  id: string;
  maskedNumber: string;
  balance: string;
  exchangeRate: string;
}

export interface CardDetails {
  maskedNumber: string;
  number: string;
  pin: string;
  cvv: string;
  expiryDate: string;
  status: string;
  cardName: string;
  accountNumber: string;
}

export interface FundingAccount {
  bank: string;
  accountNumber: string;
  cardName: string;
}
