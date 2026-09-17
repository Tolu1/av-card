export interface Transaction {
  id: string;
  narration: string;
  amount: string;
  date: string;
  time: string;
  type: "credit" | "debit";
}
