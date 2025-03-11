
import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import ExpenseStats from './ExpenseStats';
import { Expense } from '@/lib/types';
import { loadExpenses, saveExpenses } from '@/lib/storage';
import { toast } from 'sonner';

const ExpenseDashboard: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    // Load expenses from localStorage on component mount
    const savedExpenses = loadExpenses();
    setExpenses(savedExpenses);
  }, []);

  const handleAddExpense = (expense: Expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
    saveExpenses(updatedExpenses);
  };

  const handleDeleteExpense = (id: string) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    saveExpenses(updatedExpenses);
    toast.success("Expense deleted successfully");
  };

  return (
    <div className="space-y-6">
      <ExpenseStats expenses={expenses} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="lg:col-span-2">
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
      
      <ExpensesList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

export default ExpenseDashboard;
