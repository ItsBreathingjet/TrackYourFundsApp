
import React, { useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Expense } from '@/lib/types';

interface ExpenseStatsProps {
  expenses: Expense[];
}

const ExpenseStats: React.FC<ExpenseStatsProps> = ({ expenses }) => {
  const stats = useMemo(() => {
    if (expenses.length === 0) {
      return {
        total: 0,
        average: 0,
        highest: 0,
        highestCategory: 'None',
        count: 0
      };
    }

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const average = total / expenses.length;
    const highest = Math.max(...expenses.map(expense => expense.amount));
    
    // Find highest category by total amount
    const categoryTotals: Record<string, number> = {};
    expenses.forEach(expense => {
      if (categoryTotals[expense.category]) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals[expense.category] = expense.amount;
      }
    });
    
    let highestCategory = '';
    let highestAmount = 0;
    
    Object.entries(categoryTotals).forEach(([category, amount]) => {
      if (amount > highestAmount) {
        highestAmount = amount;
        highestCategory = category;
      }
    });

    return {
      total,
      average,
      highest,
      highestCategory,
      count: expenses.length
    };
  }, [expenses]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-fade-in">
      <StatCard title="Total Spent" value={`$${stats.total.toFixed(2)}`} />
      <StatCard title="Avg. Expense" value={`$${stats.average.toFixed(2)}`} />
      <StatCard title="Highest Expense" value={`$${stats.highest.toFixed(2)}`} />
      <StatCard title="Top Category" value={stats.highestCategory} />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-xl font-semibold mt-1">{value}</div>
      </CardContent>
    </Card>
  );
};

export default ExpenseStats;
