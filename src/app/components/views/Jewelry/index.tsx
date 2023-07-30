import Image from "next/image";
import React from "react";

const Jewelry = () => {
  return (
    <div className="px-1 text-gray-800">
      <div className="text-4xl md:text-5xl font-bold flex justify-start md:justify-end py-4">
        <h6 className="max-w-[27rem]">
          Unique and Authentic Vintage Designer Jewelry
        </h6>
      </div>

      <div className="flex flex-col md:flex-row py-4 gap-6 lg:gap-10">
        <div className="relative grid grid-cols-2 grid-rows-2 basis-1/2 gap-10">
          <div className="absolute -z-50 inset-0 text-slate-200">
            <h6 className="font-bold text-[7.1rem] leading-[5.6rem]">
              Different from others
            </h6>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Using Good Quality Materials</h6>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">100% Handmade Products</h6>
            <p className="leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Modern Fashion Design</h6>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="font-bold text-xl">Discount for Bulk Orders</h6>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row basis-1/2">
          <div className="w-full md:w-80 px-2 lg:px-0">
            <Image
              width={1000}
              height={1000}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75"
              }
              alt="pic"
            />
          </div>
          <div className="p-6">
            <p
              style={{ wordSpacing: "0.8rem" }}
              className="text-justify max-w-full md:max-w-[15rem]"
            >
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="text-white bg-gray-900 rounded-md px-2 py-5">
              See all products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
