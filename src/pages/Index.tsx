
import React from "react";
import Logo from "@/components/Logo";
import ExpenseDashboard from "@/components/ExpenseDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Expense Dashboard</h1>
          <p className="text-muted-foreground mb-8">Track, analyze and manage your expenses in one place</p>
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
