/* eslint-disable */
import * as React from 'react'
import NCButton from './Button'
import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'

export const addOne = (input: number) => input + 1

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Text>You pressed {count} times</Text>
      <Button onPress={() => setCount(addOne(count))} title='Press Me' />
    </View>
  )
}

export { Counter, NCButton }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})

export default NativeModules.RNNinjaComponentsOneModule
