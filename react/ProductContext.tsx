import React, { useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useQuery } from 'react-apollo'

import GET_APP_SETTINGS from '../queries/getAppSetting.graphql'

function ProductContext() {
  const productContextValue = useProduct()
  const runtime = useRuntime()
  const { orderForm } = useOrderForm()

  const { data, loading, error } = useQuery(GET_APP_SETTINGS, {
    variables: { app: `itgloberspartnerpe.frontend-app` },
  })

  const appSettings = (() => {
    try {
      const rawMessage = data?.appSettings?.message

      return JSON.parse(rawMessage || '{}')
    } catch {
      return {}
    }
  })()

  useEffect(() => {
    console.info('Procesado appSettings:', appSettings)
  }, [appSettings])

  console.info('productContextValue', productContextValue)
  console.info('runtime', runtime)
  console.info('orderForm', orderForm)

  return (
    <div>
      <h1>ProductContext</h1>
      {loading && <p>Cargando datos...</p>}
      {error && <p>Error al cargar datos: {error.message}</p>}
      {!loading && !error && (
        <>
          <h2>Configuración de la Aplicación:</h2>
          <pre>{JSON.stringify(appSettings, null, 2)}</pre>
        </>
      )}
    </div>
  )
}

export default ProductContext
