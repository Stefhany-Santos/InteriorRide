
import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-brand-green-600 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-green-500/20 hover:bg-brand-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/50 transform active:scale-95 transition-all duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};
