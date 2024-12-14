import React from "react";
import type { SVGProps } from "react";

export default function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="#9ca3af"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M4 5h12M4 12h16M4 19h8"
        color="#9ca3af"
      ></path>
    </svg>
  );
}
