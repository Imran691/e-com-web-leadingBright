import React from 'react'
import BASE_PATH_FORAPI from '../components/shared/BasePath'
import { error } from 'console'
import ALLProductsCompo from '../components/views/AllProduct'

async function fetchAllProductData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`)
  // let data = await res.json()
  // console.log(data)
  if (!res.ok){
    throw new Error("Failed to fetch")
  }
  return res.json()
}

const Products = async () => {
  const ProductData = await fetchAllProductData()
  
  return (
    <ALLProductsCompo ProductsData={ProductData} />
  )
}

export default Products