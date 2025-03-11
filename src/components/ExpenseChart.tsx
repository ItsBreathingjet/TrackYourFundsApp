
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense } from '@/lib/types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ExpenseChartProps {
  expenses: Expense[];
}

// Generate a color palette for categories
const COLORS = [
  '#3D9DCB', '#4DB6AC', '#FFB74D', '#F06292', '#9575CD', 
  '#7986CB', '#64B5F6', '#4FC3F7', '#4DD0E1', '#81C784'
];

const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  const chartData = useMemo(() => {
    const categoryTotals: Record<string, number> = {};
    
    expenses.forEach(expense => {
      if (categoryTotals[expense.category]) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals[expense.category] = expense.amount;
      }
    });
    
    return Object.entries(categoryTotals).map(([name, value], index) => ({
      name,
      value,
      color: COLORS[index % COLORS.length]
    }));
  }, [expenses]);

  const totalSpent = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  if (expenses.length === 0) {
    return (
      <Card className="shadow-md animate-fade-in">
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            Add expenses to see your spending breakdown
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md animate-fade-in">
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground">Total Expenses</p>
          <p className="text-3xl font-bold">${totalSpent.toFixed(2)}</p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Amount']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseChart;
