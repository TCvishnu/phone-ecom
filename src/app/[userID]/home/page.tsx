"use client";
import React, { useState, forwardRef } from "react";

import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import Menu from "./Menu";
import Logo from "./Logo";

import { Profile } from "./Profile";
import { Icon } from "@iconify/react";
import { Kanit } from "next/font/google";
import { phones } from "./data";
import Filters from "./Filters";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SlideTransition = forwardRef(function SlideTransition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function page() {
  const [username, setUsername] = useState("Andrea");
  const [phns, setphns] = useState(phones);
  const [openFilter, setOpenFilters] = useState(false);

  const handleCloseFilters: () => void = () => {
    setOpenFilters(false);
  };

  return (
    <div className=" w-screen h-screen flex flex-col justify-start items-center py-4 gap-6">
      <header className=" flex justify-between items-center w-full px-3">
        <button onClick={() => setOpenFilters(true)}>
          <Menu />
        </button>
        <div className=" flex justify-center items-center">
          <Logo />
          <h1
            className={`text-3xl font-semibold tracking-wider ${kanit.className}`}
          >
            Fhonez
          </h1>
        </div>
        <button>
          <Profile />
        </button>
      </header>

      <div className="w-10/12 flex flex-col items-start justify-start gap-2">
        <h2 className=" font-medium">
          Hi, <span className="underline">{username}</span>
        </h2>
        <h2 className=" text-xl font-semibold">
          What are you looking for today?
        </h2>
      </div>

      <div className="w-10/12 h-12 border border-gray-300 rounded-xl flex justify-start items-center px-3 gap-3 shrink-0">
        <Icon icon="mingcute:search-line" className=" text-[#d1d5db] size-6" />
        <input
          className=" bg-transparent h-full outline-none text-xs font-normal"
          placeholder="Search phones"
        />
      </div>

      <div className=" bg-[#f5f5f5] h-auto flex flex-row justify-center flex-wrap gap-4 p-4 rounded-t-3xl">
        {phns.map((phone) => (
          <button className="w-36 h-48 bg-white rounded-lg card-shadow flex flex-col items-center justify-end p-2 gap-2">
            <span className=" text-xs font-medium line-clamp-1">
              {phone.name}
            </span>
            <div className=" w-full flex justify-between items-center font-semibold text-xs px-2">
              <span className=" font-bold">$ {phone.price}</span>
              <div className=" flex items-center gap-1">
                <Icon
                  icon="solar:star-bold-duotone"
                  className=" text-[#ffc020] size-3"
                />

                <span>{phone.customerRating}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog
        fullScreen
        open={openFilter}
        onClose={() => setOpenFilters(false)}
        TransitionComponent={SlideTransition}
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "400px",
            marginLeft: "0px",
          },
        }}
      >
        <Filters onCloseFilters={handleCloseFilters} />
      </Dialog>
    </div>
  );
}
