import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { wallParams } from '../constants'

export default function Hole({ hole, index, handleHoleClick }) {
  return (
    <TouchableWithoutFeedback onPress={() => handleHoleClick(index)}>
      <View style={styles.block}>
        {!hole.filledWith ? <View style={styles.emptyHole} /> : <View style={styles.filledHole} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  block: {
    width: wallParams.getWallHoleSize(),
    height: wallParams.getWallHoleSize(),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyHole: {
    width: '20%',
    height: '20%',
    backgroundColor: 'black',
    borderRadius: 100,
  },
  filledHole: {
    width: '40%',
    height: '40%',
    backgroundColor: 'red',
    borderRadius: 100,
  },
})
