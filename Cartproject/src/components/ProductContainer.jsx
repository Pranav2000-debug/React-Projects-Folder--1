import React from 'react'
import { products } from '../assets/ProductData'
import ProductItem from './ProductItem'

function ProductContainer() {
  return (
    <div className='flex flex-wrap gap-x-8 gap-y-4 px-4 pt-6'> 
      {
        products.map((prod) => {
          return <ProductItem key={prod.id} {...prod} />
        })
      }
    </div>
  )
}

export default ProductContainer