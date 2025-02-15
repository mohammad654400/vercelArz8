import React from 'react';

const Insurance: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className} 
      width="100%"
      height="100%"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6579 6.34563L7.06535 18.8331C5.31035 20.2281 4.18535 23.1757 4.56785 25.3807L7.56036 43.2906C8.10036 46.4856 11.1603 49.0731 14.4003 49.0731H39.6004C42.8179 49.0731 45.9004 46.4631 46.4404 43.2906L49.4329 25.3807C49.7929 23.1757 48.6679 20.2281 46.9354 18.8331L31.3428 6.36815C28.9353 4.43315 25.0429 4.43313 22.6579 6.34563Z"
        stroke="currentColor"
        strokeWidth="3.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 34.875C30.1066 34.875 32.625 32.3566 32.625 29.25C32.625 26.1434 30.1066 23.625 27 23.625C23.8934 23.625 21.375 26.1434 21.375 29.25C21.375 32.3566 23.8934 34.875 27 34.875Z"
        stroke="#FFC107"
        strokeWidth="3.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Insurance;
