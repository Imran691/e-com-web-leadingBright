
import { FC } from "react";
import {
  NavbarItemType,
  navbarArray,
} from "@/app/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Expand: FC<{item :NavbarItemType}> = ({ item}) => {

  
  const [isExpanded, setExpanded] = useState(false)
  return (

    <li className={`${isExpanded? "h-40" : "h-12"} list-none`} >
    <div onClick={ () => setExpanded(!isExpanded)} className="flex justify-between items-center  py-2 px-3 hover:bg-purple-400 rounded-md duration-300">
    <Link href={item.href}>{item.label}</Link>
    {item.isDropDown ? (
      <BiChevronDown className="mt-1 rotate-180 group-hover:rotate-0 duration-300" />
    ) : (
      ""
    )}
    </div>
 

    <div className="flex flex-col mt-1">
      {isExpanded &&
        item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
          <Link
            className="hover:bg-gray-100 duration-300 px-5 py-1 rounded-md"
            href={subItem.href}
            key={index}
          >
            {subItem.label}
          </Link>
        ))}
    </div>
    </li>
  );
};

export default Expand;
