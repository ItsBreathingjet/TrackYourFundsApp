
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense } from '@/lib/types';
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from 'date-fns';
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ExpensesListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <Card className="shadow-md animate-fade-in">
        <CardHeader>
          <CardTitle>Recent Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            No expenses yet. Start by adding your first expense!
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md animate-fade-in">
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div 
                key={expense.id} 
                className="flex items-center justify-between p-4 border rounded-md hover:bg-accent transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{expense.description}</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{expense.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(expense.date), { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">${expense.amount.toFixed(2)}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-destructive hover:bg-destructive/10"
                    onClick={() => onDeleteExpense(expense.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ExpensesList;
