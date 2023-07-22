import Image from 'next/image'
import Hero from './components/views/Hero'
import ProductTypes from './components/views/ProductTypes'

export default function Home() {
  return (
    <main>
     <Hero />
     <ProductTypes />
    </main>
  )
}
