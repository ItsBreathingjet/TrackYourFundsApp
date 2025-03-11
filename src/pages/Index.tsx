
import React from "react";
import Logo from "@/components/Logo";
import ExpenseDashboard from "@/components/ExpenseDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100/50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Expense Dashboard</h1>
          <ExpenseDashboard />
        </div>
      </main>
      
      <footer className="border-t mt-12 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ExpenseTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
