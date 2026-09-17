export interface Transaction {
  id: string;
  narration: string;
  amount: string;
  date: string;
  recipient: string;
  status: "successful";
  type: "credit" | "debit";
}
