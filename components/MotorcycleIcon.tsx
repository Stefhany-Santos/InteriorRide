
import React from 'react';

export const MotorcycleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m3 17.5 4 4" />
    <path d="m17 17.5 4 4" />
    <path d="M12 19h.01" />
    <path d="M5 11v-4h4" />
    <path d="M15 11h4V7" />
    <path d="M8 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);
