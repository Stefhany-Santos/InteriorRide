
import React from 'react';

export const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 16.94h-4a2 2 0 0 1-1.94-2.43l.86-5.42a3 3 0 0 1 2.82-2.09h4.52a3 3 0 0 1 2.82 2.1l.86 5.42a2 2 0 0 1-1.94 2.43Z" />
    <path d="M22 17h-1" />
    <path d="M3 17H2" />
    <path d="M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M5 12H3.8c-.9 0-1.6.9-1.3 1.8l.8 2.4" />
    <path d="m19 12 h 1.2 c .9 0 1.6 .9 1.3 1.8l-.8 2.4" />
  </svg>
);
