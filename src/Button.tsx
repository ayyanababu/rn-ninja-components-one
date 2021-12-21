import { Button, NativeBaseProvider } from 'native-base'
import React from 'react'

const NCButton = () => {
  return (
    <NativeBaseProvider>
      <Button colorScheme='success'>Success</Button>
    </NativeBaseProvider>
  )
}

export default NCButton
