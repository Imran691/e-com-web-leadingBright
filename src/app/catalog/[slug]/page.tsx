import { responseType } from '@/app/components/utils/ProductDataArrayAndTypes'
import ProductDetail from '@/app/components/views/ProductDetail'
import React, { FC } from 'react'

async function fetchPreviewData(slug: string) {
  let res = await fetch(`https://mthqtigx.api.sanity.io/v2023-07-20/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`)
  return res.json()
}

const Catalog = async ({params}: {params: {slug: string}}) => {

 let data:responseType = await fetchPreviewData(params.slug)
 console.log(data)
  return (
    <div>
      <ProductDetail item={data.result[0]}/>
    </div>
  )
}

export default Catalog