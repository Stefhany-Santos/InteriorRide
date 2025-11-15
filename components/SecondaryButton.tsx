
import React from 'react';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-transparent text-brand-green-600 font-bold text-lg py-4 px-6 rounded-xl border-2 border-brand-green-600 hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-500/50 transform active:scale-95 transition-all duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};
