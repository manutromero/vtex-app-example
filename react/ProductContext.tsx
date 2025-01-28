import React from 'react'
import { useProduct } from 'vtex.product-context'


function ProductContext() {
  const productContextValue = useProduct();
  console.log("productContextValue", productContextValue)
  return <div>Nombre del producto:, {productContextValue?.product?.productName} </div>
}

export default ProductContext
