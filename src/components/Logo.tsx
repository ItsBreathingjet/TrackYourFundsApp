
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute top-0 left-0 w-5 h-5 bg-pink-400 rounded-br-lg opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-indigo-800 rounded-tl-lg opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">$</div>
      </div>
      <div className="flex flex-col items-start">
        <span className="font-bold text-xl text-indigo-900">TrackYourFunds</span>
        <span className="text-xs text-purple-600 -mt-1">Manage your finances</span>
      </div>
    </div>
  );
};

export default Logo;
