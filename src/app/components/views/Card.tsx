import React from "react";
import { FC } from "react";
import { oneProductType } from "../utils/ProductDataArrayAndTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
// import PortableText from "react-portable-text"  //library to render portable text (description in this case)

const builder = imageUrlBuilder(client);

// function to create URL for images
function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <div className="border-4 max-w-sm min-w-[24rem] space-y-3">
      <div className="w-full">
        <Image
          width={1000}
          height={1000}
          src={urlFor(singleProductData.image[0]).url()}
          alt={singleProductData.image[0].alt}
        />
      </div>
      <div className="space-y-1 text-gray-800 font-semibold text-lg">
        <h6>{singleProductData.productName}</h6>
        {/* <PortableText className="text-sm font-normal" content = {singleProductData.description}/> */}
        <p>${singleProductData.price}</p>
      </div>
    </div>
  );
};

export default Card;
