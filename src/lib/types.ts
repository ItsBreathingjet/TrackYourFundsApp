
export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

export const DEFAULT_CATEGORIES = [
  "Food & Dining",
  "Transportation",
  "Housing",
  "Entertainment",
  "Shopping",
  "Healthcare",
  "Utilities",
  "Travel",
  "Education",
  "Other"
];
