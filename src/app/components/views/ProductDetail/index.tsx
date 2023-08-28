"use client";

import { FC, useState } from "react";
import {
  imagesType,
  oneProductType,
} from "../../utils/ProductDataArrayAndTypes";
import { client } from "../../../../../sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { toast } from "react-hot-toast";

const builder: any = ImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const [imageForPreviewOfSelected, setImageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  const [quantity, setQuantity] = useState(1);

  function incrementTheQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementTheQuantity() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(cartActions.addToCart({quantity:1}))
    toast.success("Product Added")
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* left portion */}
      <div className="flex gap-x-4 md:gap-x-8">
        {/* left sub portion */}
        <div className="space-y-4">
          {item.image.map((subItem: imagesType, index: number) => (
            <div
              key={index}
              className="w-16 md:w-24"
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
        <div className="w-[33rem] flex flex-nowrap">
          {item.image.map((subItem: imagesType, index: number) => {
            if (subItem._key === imageForPreviewOfSelected) {
              return (
                <Image
                  key={index}
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
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-3xl text-gray-700">{item.productName}</h1>
          <p className="text-xl text-purple-900 font-medium">
            {item.productTypes[1]}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-gray-700">SELECT SIZE</p>
          <div className="flex gap-2 text-purple-900">
            {item.size.map((subItem: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 cursor-pointer font-semibold hover:shadow-xl"
              >
                {subItem}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-7">
          <p className="font-semibold text-lg text-gray-700">Quantity:</p>
          <div className="flex items-center gap-2 text-lg">
            <div
              onClick={decrementTheQuantity}
              className="flex items-center justify-center rounded-full border border-gray-800 w-9 h-9 cursor-pointer select-none"
            >
              -
            </div>
            <p>{quantity}</p>
            <div
              onClick={incrementTheQuantity}
              className="flex items-center justify-center rounded-full border border-gray-800 w-9 h-9 cursor-pointer select-none"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-8">


          <button 
          onClick={addItem}
          className="flex  items-center gap-x-2 text-white bg-gray-900 border border-gray-500 px-4 py-2">
            <BsCart2 />
            Add to cart
          </button>


          <p className="text-2xl font-semibold">${item.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
