import React from 'react'
import { wallParams } from '../constants'
import { StyleSheet, View, FlatList } from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import Hole from './Hole'
import SelectHoldModal from './SelectHoldModal'

export default function Wall({
  wall,
  modalVisible,
  handleHoleLongPress,
  handleModalClose,
  handleSelectHold,
}) {
  const renderItem = ({ item, index }) => (
    <Hole hole={item} index={index} handleHoleLongPress={handleHoleLongPress} />
  )

  return (
    <>
      <View>
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
      <SelectHoldModal
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
        handleSelectHold={handleSelectHold}
      />
    </>
  )
}

const styles = StyleSheet.create({
  view: {},
  background: {
    width: '100%',
    height: '100%',
  },
  zoomableView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  listStyle: {},
  modalBackground: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 5,
    backgroundColor: 'white',
  },
})
