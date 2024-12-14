import React from "react";
import type { SVGProps } from "react";

export default function Logout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.75rem"
      height="1.75rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#9ca3af"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={36}
          strokeDashoffset={36}
          d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="36;0"
          ></animate>
        </path>
        <path strokeDasharray={14} strokeDashoffset={14} d="M9 12h11.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="14;0"
          ></animate>
        </path>
        <path
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
