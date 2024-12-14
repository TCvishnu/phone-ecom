import React from "react";
import { Icon } from "@iconify/react";
import { Kanit } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Page() {
  return (
    <div className="w-screen h-screen bg-[#f0f0f0] flex flex-col items-center justify-evenly bg-[url('/images/guy.png')]">
      <header className="flex flex-col justify-center items-center gap-2 text-white">
        <h1
          className={`text-4xl font-semibold tracking-wider ${kanit.className}`}
        >
          Fhonez
        </h1>
        <h2 className="text-sm tracking-tighter">
          Find all the phones in the best price
        </h2>
      </header>
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <div className="w-10/12 flex justify-start items-center bg-white h-10 px-3 gap-3 rounded-lg">
          <Icon icon="eva:email-outline" className=" text-gray-400 size-5" />
          <input
            className=" bg-transparent outline-none w-full h-full text-sm text-gray-600"
            placeholder="Email"
          />
        </div>

        <div className="w-10/12 flex justify-start items-center bg-white h-10 px-3 gap-3 rounded-lg">
          <Icon icon="solar:lock-bold" className=" text-gray-400 size-5" />
          <input
            className=" bg-transparent outline-none w-full h-full text-sm text-gray-600"
            placeholder="Password"
          />
        </div>
        <button className=" text-white text-xs my-4">Forgot password?</button>

        <button className=" text-white bg-[#10ce83] w-10/12 h-10 rounded-lg text-sm font-semibold">
          Sign in
        </button>

        <div className=" w-10/12 flex gap-1 justify-center text-xs my-6">
          <span className=" text-white ">Don't have an account?</span>
          <Link
            className=" text-[#10ce83] underline font-semibold"
            href="/register"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
