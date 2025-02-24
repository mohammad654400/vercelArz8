import React from 'react';

const Clock: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className} // اضافه کردن prop className
      width="100%"
      height="100%"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.5 27C49.5 39.42 39.42 49.5 27 49.5C14.58 49.5 4.5 39.42 4.5 27C4.5 14.58 14.58 4.5 27 4.5C39.42 4.5 49.5 14.58 49.5 27Z"
        stroke="currentColor"
        strokeWidth="3.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.347 34.154L28.372 29.9915C27.157 29.2715 26.167 27.539 26.167 26.1215V16.8965"
        stroke="#FFC107"
        strokeWidth="3.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Clock;
