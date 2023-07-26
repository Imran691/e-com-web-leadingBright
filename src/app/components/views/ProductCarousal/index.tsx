import React from 'react'

const ProductCarousal = ({ProductData} : any) => {
  return (
    <div>
      {ProductData[0].productName}
    </div>
  )
}

export default ProductCarousal
