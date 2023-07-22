import Image from "next/image";
import React from "react";
import { heroGirlimage } from "../../assets";

import { BsCart2 } from "react-icons/bs";

const Hero = () => {
  const btnText = "Start\n Shopping";
  return (
    <div className="flex items-center justify-between py-5">
      {/* right side */}
      <div className="space-y-6 max-w-sm">
        <button
          aria-label="Redirect the user to sale page"
          className="bg-primaryWhite rounded-md text-blue-700 py-2 px-4 font-medium"
        >
          Sale 70%
        </button>
        <h1 className="text-4xl md:text-7xl text-gray-800 font-bold ">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-gray-700 font-medium">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          aria-label="Redirect the user to sale page"
          className="flex gap-1 items-center rounded-md text-lg ring-1 ring-slate-600 bg-gray-800 text-white font-semibold py-4 px-4"
        >
          <BsCart2 size={24} />
          <p className="whitespace-pre leading-5">{btnText}</p>
        </button>
        <div className="flex flex-wrap gap-4">
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://dine-market-bay.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.0bb22c39.png&w=128&q=75"
            }
            alt="bazar"
          />
          </div>
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://dine-market-bay.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.4e3bf32b.png&w=128&q=75"
            }
            alt="versace"
          />
          </div>
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://dine-market-bay.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.edfd1917.png&w=128&q=75"
            }
            alt="bustle"
          />
          </div>
          <div className="w-14 md:w-28">
          <Image
            width={100}
            height={100}
            src={
              "https://dine-market-bay.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.d1ea7066.png&w=128&q=75"
            }
            alt="inStyle"
          />
          </div>
        </div>
      </div>

      {/* left side */}
      <div className="hidden md:flex bg-primaryWhite rounded-full">
        <Image src={heroGirlimage} alt="Hero Girl" />
      </div>
    </div>
  );
};

export default Hero;
