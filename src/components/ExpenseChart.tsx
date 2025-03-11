
import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense } from '@/lib/types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { DEFAULT_CATEGORIES } from '@/lib/types';

interface ExpenseChartProps {
  expenses: Expense[];
}

// Create a color map to maintain consistent colors for each category
const CATEGORY_COLORS: Record<string, string> = {
  "Food & Dining": '#3D9DCB',
  "Transportation": '#4DB6AC',
  "Housing": '#FFB74D',
  "Entertainment": '#F06292',
  "Shopping": '#9575CD',
  "Healthcare": '#7986CB',
  "Utilities": '#64B5F6',
  "Travel": '#4FC3F7',
  "Education": '#4DD0E1',
  "Other": '#81C784'
};

// Fallback colors for any categories not in the map
const FALLBACK_COLORS = [
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
    
    return Object.entries(categoryTotals).map(([name, value]) => {
      // Assign color from the map if available, or use a fallback
      const color = CATEGORY_COLORS[name] || 
        FALLBACK_COLORS[Object.keys(categoryTotals).indexOf(name) % FALLBACK_COLORS.length];
      
      return {
        name,
        value,
        color
      };
    });
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
