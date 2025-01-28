import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'
import { useOrderForm } from 'vtex.order-manager/OrderForm';

function ProductContext() {/*  */
  const productContextValue = useProduct();
  const runtime = useRuntime()
  const { orderForm } = useOrderForm();

  console.log("useRuntime", runtime)
  console.log("orderForm", orderForm)
  console.log("productContextValue", productContextValue)


  return <div>Nombre del producto:, {productContextValue?.product?.productName} </div>
}

export default ProductContext
