import {
  NavbarItemType,
  navbarArray,
} from "@/app/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import React from "react";

import { BiChevronDown } from "react-icons/bi";

const MobileNavBar = () => {
  return (
    <div>
      <div className="w-full px-6 py-4 bg-gray-200">
        {navbarArray.map((item: NavbarItemType, index: number) => (
          <ul>
            <li className="py-2 px-3 hover:bg-purple-400 rounded-md duration-300 flex justify-between">
              <Link href={item.href}>{item.label}</Link>
              {item.isDropDown ? (
                <BiChevronDown className="mt-1 rotate-180 group-hover:rotate-0 duration-300" />
              ) : (
                ""
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
