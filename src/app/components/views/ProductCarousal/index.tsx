"use client"
import { Component, FC, ReactNode } from "react";
import { oneProductType } from "../../utils/ProductDataArrayAndTypes";
import Card from "../Card";
//React-slick library for scrolling the products
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// const ProductCarousal: FC<{ ProductData: Array<oneProductType> }> = ({
//   ProductData,
// }) => {
  
//   return (
//     <div className="flex">
//       {ProductData.map((item: oneProductType, index: number) => (
//         <Card singleProductData={item} />
//       ))}
//     </div>
//   );
// };

// export default ProductCarousal;


export default class ProductCarousal extends Component<{ProductData: Array<oneProductType>}> {
  render():ReactNode {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
      ]
    };
    return (
      
        <Slider {...settings}>
        {this.props.ProductData.map((item: oneProductType, index: number) => (
        <Card singleProductData={item} />
      ))}
        </Slider>
    
    );
  }
  } 