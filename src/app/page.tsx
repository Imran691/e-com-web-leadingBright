import Image from 'next/image'
import Hero from './components/views/Hero'
import ProductTypes from './components/views/ProductTypes'
import BASE_PATH_FORAPI from './components/shared/BasePath'
import ProductCarousal from './components/views/ProductCarousal'

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`)
  if(!res.ok){
    throw new Error("Failed to fetch data!")
  }
  return res.json()
}

export default async function Home() {
  let {response} = await fetchAllProductsData()

  return (
    <main>
     <Hero />
     <ProductTypes />
     <ProductCarousal ProductData = {response} />
    </main>
  )
}
