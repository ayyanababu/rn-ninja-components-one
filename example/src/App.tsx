import React, { useEffect } from 'react'
import RNNinjaComponentsOneModule, {
  Counter,
  NCButton,
} from 'rn-ninja-components-one'

const App = () => {
  useEffect(() => {
    console.log(RNNinjaComponentsOneModule)
  })

  return <Counter />
}

export default App
