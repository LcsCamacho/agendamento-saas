"use client";
import Image from "next/image";
import { ListSidebar } from "./ListSidebar";
import { BiExit } from "react-icons/bi";
import { useState } from "react";
import { Divider } from "@nextui-org/react";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`dark:bg-gray-800 bg-slate-100 dark:text-white text-black items-center  sidebar  relative transition-all duration-250 ${
        isOpen ? "w-64 px-4" : "w-16 px-2"
      }`}
    >
      <div className="flex items-center justify-center mt-6 flex-col">
        <div
          className={` ${
            isOpen ? "absolute top-4 right-4 rotate-180" : ""
          }  hover:scale-95 cursor-pointer `}
          onClick={() => setIsOpen((st) => !st)}
        >
          <BiExit size={22} />
        </div>
        <div className="flex items-center mt-4 w-full">
          <Image
            alt="logo"
            src="/images/logo.png"
            className="w-full"
            width={100}
            height={125}
          />
        </div>
      </div>
      <Divider className="mt-4" />
      <ListSidebar isOpen={isOpen} />
    </div>
  );
};
