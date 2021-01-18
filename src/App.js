import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Wall from './components/Wall'
import useWall from './hooks/useWall'

export default function App() {
  const wallHook = useWall()

  return (
    <SafeAreaView style={styles.safe}>
      <Wall {...wallHook} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
