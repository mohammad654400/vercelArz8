import React from "react";
interface WaveDividerProps {
  strokeColor?: string;
  position?: "relative" | "absolute";
}
export default function WaveDivider({
  strokeColor = "currentColor",
  position = "relative",
}: WaveDividerProps) {
  return (
    <div style={{ position: position }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="122.776 0 163.15200000000002 52.294117647058826"
        width="163.15200000000002"
        height="52.294117647058826"
      >
        <path
          fill="currentColor"
          d="M1.00169e-06 1.52588e-05L411.44 2.01652e-05L292.153 1.87427e-05C276.92 1.8561e-05 262.508 6.90537 252.963 18.7775L242.714 31.5249C221.655 57.718 181.323 56.2779 162.186 28.6496L157.34 21.6528C147.946 8.0915 132.499 1.68388e-05 116.002 1.66421e-05L1.00169e-06 1.52588e-05Z"
        />
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.72222"
          stroke={strokeColor}
          d="M215.728 18.6254L207.306 27.047C206.311 28.0416 204.684 28.0416 203.689 27.047L195.268 18.6254"
        />
      </svg>
    </div>
  );
}
