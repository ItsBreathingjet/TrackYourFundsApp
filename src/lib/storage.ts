
import { Expense } from "./types";

const STORAGE_KEY = "expense-tracker-data";

export const saveExpenses = (expenses: Expense[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};

export const loadExpenses = (): Expense[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
