import Image from "next/image";
import React from "react";

const ProductTypes = () => {
  return (
    <div className="py-16 px-2 space-y-5">
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
        <h3 className="text-3xl text-gray-800 font-bold">
          Our Promotions Events
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full px-12 col-span-1 md:col-span-2 bg-cat1">
          <div className="max-w-[13rem] py-8">
            <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
            <p className="text-xl">For the summer season</p>
          </div>
          <div className="w-60">
            <Image
              width={1000}
              height={1000}
              alt="summer season"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full h-full row-span-1 md:row-span-2 bg-cat2">
          <div className="p-4">
            <p>Flex Sweatshirt</p>
            <p className="text-lg">
              <del>$100.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>$75.00</b>
            </p>
          </div>
          <div className="w-60">
            <Image
              width={1000}
              height={1000}
              alt="sweaters"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-center w-full h-full row-span-1 md:row-span-2 bg-cat3">
        <div className="p-4">
            <p>Flex Push Button Bombe</p>
            <p className="text-lg">
              <del>$225.00</del>
              &nbsp;&nbsp;&nbsp;
              <b>$190.00</b>
            </p>
          </div>
          <div className="w-60">
            <Image
              width={1000}
              height={1000}
              alt="sweaters"
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"
              }
            />
          </div>
        </div>

        <div className="w-full col-auto md:col-span-2 bg-cat4 text-white flex flex-col items-center justify-center space-y-3 py-9">
          <h3 className="font-extrabold text-4xl">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
          aria-label="Redirect user to Dine weekend sale" className="py-1 px-6 text-lg font-medium rounded-lg bg-[#474747] tracking-wider">
            DINE WEEKEND SALE
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
