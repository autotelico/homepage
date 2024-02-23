import React, { ReactElement, useState } from 'react'
import Homepage from './Homepage'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
