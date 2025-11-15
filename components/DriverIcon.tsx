
import React from 'react';

interface DriverIconProps extends React.SVGProps<SVGSVGElement> {}

export const DriverIcon: React.FC<DriverIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v4m0 10v4m6.7-12.7L16 6M7.3 16.7L8 18m9.4-9.4L18 8M6 7.3L7.3 6m0 10.7L6 18m10.7 0L18 16.7"
      />
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      />
    </svg>
  );
};
