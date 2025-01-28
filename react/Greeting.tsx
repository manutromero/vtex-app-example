import React, { ReactNode } from 'react'

type Props = {
  name: string,
  children?: ReactNode;
}

function Greeting({ name, children }: Props) {
  return <div>Hey, {name}
   {children && <div>{children}</div>}
   </div>
}

export default Greeting
