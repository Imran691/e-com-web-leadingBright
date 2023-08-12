import React from "react";
import { client } from "../../../../sanity/lib/client";
import { oneProductType } from "@/app/components/utils/ProductDataArrayAndTypes";
import Card from "@/app/components/views/Card";

async function getAllProductsForSearch () {
  let response = await client.fetch(`*[_type == "products"]`)
  return response
}

const Search = async ({ params }: { params: { query: string } }) => {
  let slug = (params.query).toLocaleLowerCase()
  let data = await getAllProductsForSearch()
  let dataToMap = await data.filter((item: oneProductType) => (item.productName).toLocaleLowerCase().indexOf(slug))


  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4"> 
      {dataToMap.map((items:oneProductType, index:number) => (
        <Card key={index} singleProductData={items} />
      ))}
     </div>
  )
};

export default Search;
