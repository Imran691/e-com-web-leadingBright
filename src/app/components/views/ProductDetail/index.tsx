"use client";

import { FC, useState } from "react";
import {
  imagesType,
  oneProductType,
} from "../../utils/ProductDataArrayAndTypes";
import { client } from "../../../../../sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder: any = ImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [imageForPreviewOfSelected, setImageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);

  return (
    <div>
      {/* left portion */}
      <div className="flex gap-x-8">
        {/* left sub portion */}
        <div className="space-y-4">
          {item.image.map((subItem: imagesType, index: number) => (
            <div
              key={index}
              className="w-24"
              onClick={() => setImageForPreviewOfSelected(subItem._key)}
            >
              <Image
                alt={subItem.alt}
                src={urlFor(subItem).width(1000).height(1000).url()}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
        {/* right sub portion */}
        <div className="w-[33rem]">
          {item.image.map((subItem: imagesType, index: number) => {
            if (subItem._key === imageForPreviewOfSelected) {
              return (
                <Image
                  alt={subItem.alt}
                  src={urlFor(subItem).width(1000).height(1000).url()}
                  width={1000}
                  height={1000}
                />
              );
            }
          })}
        </div>
      </div>

      {/* right portion */}
      <div></div>
    </div>
  );
};

export default ProductDetail;
