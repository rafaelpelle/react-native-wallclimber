import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native'
import { wallParams, holdOptions, colors } from '../constants'

export default function Hole({ hole, index, handleHoleLongPress }) {
  const getImgSrc = () => holdOptions.find(({ id }) => id === hole.filledWith)?.image

  return (
    <TouchableWithoutFeedback onLongPress={() => handleHoleLongPress(index)}>
      <View style={styles.block}>
        {hole.filledWith ? (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={getImgSrc()} />
          </View>
        ) : (
          <View style={styles.emptyHole} />
        )}
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
    width: '13%',
    height: '13%',
    backgroundColor: 'black',
    borderRadius: 100,
  },
  imageContainer: {
    width: '85%',
    height: '85%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})
