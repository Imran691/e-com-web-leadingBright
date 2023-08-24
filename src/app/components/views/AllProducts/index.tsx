// "use client";
// import { Component } from "react";
// import { oneProductType } from "../../utils/ProductDataArrayAndTypes";
// import InfiniteScroll from "react-infinite-scroll-component";
// import BASE_PATH_FORAPI from "../../shared/BasePath";
// import Card from "../Card";

// interface propsType {
//   productArray: Array<oneProductType>;
// }
// export default class ALLProductsCompo extends Component<{ProductsData: propsType}> {
//   start: number = 0;
//   end: number = 20;
//   state: {items:Array<oneProductType>, hasMore: boolean} = {
//     items: [...this.props.ProductsData.productArray],
//     hasMore: true,
//   };

//   fetchDataFromApiGradually = async (start:number, end:number) => {
//     const res = await fetch (`${BASE_PATH_FORAPI}/api/products/?start=${start}&end=${end}`)
    
//     const dataToFetchAndSend = await res.json()
//     if (dataToFetchAndSend.productArray === "Not found"){
//       this.setState({hasMore : false})
//     }
    
//     return dataToFetchAndSend;
//   }

//   getData = async () => {
//     let allTogether = await this.fetchDataFromApiGradually(this.start, this.end)
//     if(allTogether.productArray !== "Not found"){
//       this.setState({
//         items: this.state.items.concat(allTogether.productArray)
//       })
//     } else {
//       this.setState({hasMore: false})
//     }
    
//     this.start = this.start + 10;
//     this.end = this.end + 10;
//     // console.log(this.props.ProductsData.productArray[0].price);
//   };

//   render() {
//     return (
//         <InfiniteScroll
//           dataLength={this.state.items.length} //This is important field to render the next data
//           next={this.getData}
//           hasMore={this.state.hasMore}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: "center" }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10"
//         >
//           {this.state.items.map( (item:oneProductType, index:number) => (
//             <Card key={index} singleProductData={item}/>
//           ))}
//         </InfiniteScroll>
//     );
//   }
// }
