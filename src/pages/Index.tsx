
import React from "react";
import Logo from "@/components/Logo";
import ExpenseDashboard from "@/components/ExpenseDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white shadow-md border-b border-indigo-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text inline-block">
              Expense Dashboard
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            <p className="text-purple-600 mt-3">Track, analyze and manage your expenses in one place</p>
          </div>
          <ExpenseDashboard />
        </div>
      </main>
      
      <footer className="border-t mt-12 py-6 bg-white border-indigo-100">
        <div className="container mx-auto px-4 text-center text-sm text-purple-500">
          © {new Date().getFullYear()} ExpenseTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
