"use client"
import { Component, FC, ReactNode } from "react";
import { oneProductType } from "../../utils/ProductDataArrayAndTypes";
import Card from "../Card";
//React-slick library for scrolling the products
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

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


// export default class ProductCarousal extends Component<{ProductData: Array<oneProductType>}> {
//   render():ReactNode {
//     const settings = {
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       centerMode: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//           }
//         },
//       ]
//     };
//     return (
      
//         <Slider {...settings}>
//         {this.props.ProductData.map((item: oneProductType, index: number) => (
//         <Card key={index} singleProductData={item} />
//       ))}
//         </Slider>
    
//     );
//   }
//   } 

const ProductCarousal: FC<{ ProductData: Array<oneProductType> }> = ({ProductData}) => {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        console.log("moving orignal")
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 5;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    };

    let dataToIterate = ProductData.slice(0, 9)

    return (
      <div>
      <div className="text-center space-y-3">
      <p className="text-blue-800 text-sm">PRODUCTS</p>
      <h3 className="text-3xl text-gray-800 font-bold">
        Check What We Have
      </h3>
    </div>
        <div
            onMouseMove={mouseMoves}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            className="select-none flex gap-4 overflow-x-hidden overflow-y-hidden scrollGrab py-4"
            onTouchMove={mouseMovesForMobile}
            onTouchStart={mouseDownForMobile}
            onTouchEnd={mouseUp}
        >
            {dataToIterate.map((item: oneProductType, index: number) => (
                <Card key={index + 4} singleProductData={item} />
            ))}
        </div>
        </div>
    )
}

export default ProductCarousal