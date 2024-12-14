import React from "react";
import type { SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        fill="#10ce83"
        d="M7 4.75A2.75 2.75 0 0 1 9.75 2h8.5A2.75 2.75 0 0 1 21 4.75v18.5A2.75 2.75 0 0 1 18.25 26h-8.5A2.75 2.75 0 0 1 7 23.25zM12.25 21a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
      ></path>
    </svg>
  );
}
