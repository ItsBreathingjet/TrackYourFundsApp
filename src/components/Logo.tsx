
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 bg-expense-500 rounded-lg overflow-hidden rotate-45">
        <div className="absolute top-0 left-0 w-4 h-4 bg-expense-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-expense-600"></div>
      </div>
      <span className="font-bold text-xl text-gray-800">ExpenseTrack</span>
    </div>
  );
};

export default Logo;
