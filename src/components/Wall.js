import React from 'react'
import { wallParams } from '../constants'
import { StyleSheet, View, FlatList } from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import Hole from './Hole'

export default function Wall({ wall, handleHoleClick }) {
  const renderItem = ({ item, index }) => <Hole hole={item} index={index} handleHoleClick={handleHoleClick} />

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
})
