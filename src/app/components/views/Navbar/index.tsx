"use client";
import Image from "next/image";
import React, { useState } from "react";
import { navbarArray, NavbarItemType } from "../../utils/NavbarArrayAndTypes";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Expand from "./subComponents/Expand";
import DropDown from "./subComponents/DropDown";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber, setCartItemNumber] = useState<number>(0)
  return (
    <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor z-50">
      <div className="flex py-6 justify-between items-center space-x-12">
        <Link href="/" className="flex shrink-0 w-36">
          <Image src={"/Logo.webp"} alt="Logo" width={500} height={500} />
        </Link>

        <div className="hidden lg:flex justify-between items-center w-full">
          <ol className="flex space-x-4 font-medium text-purple-950">
            {navbarArray.map((item: NavbarItemType, index: number) => (
              <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                <Link className="hover:text-gray-600" href={item.href}>
                  {item.label}
                </Link>
                {item.isDropDown ? (
                  <BiChevronDown className="mt-1 rotate-180 group-hover:rotate-0 duration-300" />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div
                    className={`invisible group-hover:visible absolute top-8 left-0 py-4 px-6 g-gray-100 font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ol>

          <div className="border flex items-center text-gray-600 px-3 rounded-md">
            <BiSearch />
            <input
              type="text"
              placeholder="Search our store"
              className="py-1 pl-1 pr-5 w-80 focus:outline-none"
            />
          </div>

          <div className=" relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
            <div className="absolute w-4 h-4 top-1 right-2 text-xs font-light bg-red-400 rounded-full flex items-center justify-center">
              {cartItemNumber}
            </div>
            <BsCart2 size={24} />
          </div>
        </div>

        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={30} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <RxHamburgerMenu size={25} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobileNavBar />}
    </div>
  );
};

export default Navbar;

const MobileNavBar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {navbarArray.map((item: NavbarItemType, index: number) => (
        <Expand key={index} item={item} />
      ))}
    </div>
  );
};
