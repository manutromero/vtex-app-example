import React, { ReactNode, useEffect } from 'react'
import { useQuery } from 'react-apollo'

import GET_DOCUMENTS from '../queries/getDocument.graphql'

type Props = {
  name: string
  children?: ReactNode
}

function Greeting({ name, children }: Props) {
  const { data, loading, error } = useQuery(GET_DOCUMENTS, {
    variables: {
      acronym: 'US',
      fields: ['numero, usuario'],
    },
    context: {
      headers: {
        cookie: `VtexIdclientAutCookie=eyJhbGciOiJFUzI1NiIsImtpZCI6IjM4RDc0NDE1MEVFNDU4OUUwMzAzRDg4OUE5NEYwQTM2RDlGMzQxOUUiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJqaG9uLnJvbWVyb0BpdGdsb2JlcnMuY29tIiwiYWNjb3VudCI6InFhbWtwbW92aWxpZGFkY28iLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6IjYxM2ZlODQ1LTFmOTQtNDY3NC1hNzdlLTM0Y2YyNWUxMDViNiIsImV4cCI6MTczODI2NjA5MSwidHlwZSI6InVzZXIiLCJ1c2VySWQiOiJjMGYyOGUyOC01MTQyLTQzYjUtOWIyZC0xMTQ2ZDhlMDU1ZDYiLCJpYXQiOjE3MzgxNzk2OTEsImlzUmVwcmVzZW50YXRpdmUiOmZhbHNlLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiZGRjZWRmYTAtYmRjYi00MTI3LTg4OTQtNmI3MjgzZDMyZDBjIn0.IgcL_ypF8KZMDZ6t6CXeAJ697vrPSHUFhxBvUOqwhHSlu5Wb1sF0jqrMWMM8D68P0VyiXjheTlnA2A5G2rK7kA`,
      },
    },
  })

  useEffect(() => {
    if (!loading && !error) {
      console.info('getDocument:', data)
    }
  }, [data, error, loading])

  return (
    <div>
      Hey, {name}
      {children && <div>{children}</div>}
    </div>
  )
}

export default Greeting
