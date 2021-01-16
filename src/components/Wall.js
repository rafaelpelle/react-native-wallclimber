import React from 'react'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import { StyleSheet, TouchableWithoutFeedback, View, FlatList } from 'react-native'
import { wallParams } from '../constants'

export default function Wall({ wall }) {
  const formatData = () => {}

  const renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback>
      <View style={styles.block} />
    </TouchableWithoutFeedback>
  )

  return (
    <View style={styles.view}>
      <ReactNativeZoomableView
        initialZoom={1}
        minZoom={0.5}
        maxZoom={2}
        zoomStep={0.1}
        style={styles.zoomableView}
      >
        <FlatList
          style={styles.listStyle}
          numColumns={wallParams.numHorizontalHoles}
          data={wall}
          keyExtractor={({ id }) => id}
          renderItem={renderItem}
        />
      </ReactNativeZoomableView>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  zoomableView: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  listStyle: {},
  block: {
    width: wallParams.getWallHoleSize(),
    height: wallParams.getWallHoleSize(),
    borderWidth: 1,
    borderColor: 'black',
  },
})
