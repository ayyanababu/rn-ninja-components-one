import { Button, NativeBaseProvider } from 'native-base'
import React from 'react'

const NCButton = (props) => {
  const {
    colorScheme,
    variant,
    isLoading,
    size,
    startIcon,
    endIcon,
    isLoadingText,
    spinner,
    isDisabled,
    textProps,
    stackProps,
    spinnerPlacement,
    loadingProps,
    disabledProps,
    spinnerProps,
    rightIcon,
    leftIcon,
    styles,
    label,
    onPress,
    ...rest
  } = props
  return (
    <NativeBaseProvider>
      <Button colorScheme='success'>Success</Button>
    </NativeBaseProvider>
  )
}

export default NCButton
