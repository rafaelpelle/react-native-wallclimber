import React from 'react'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import { SafeAreaView, StyleSheet, View, Alert, TouchableWithoutFeedback, Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.view}>
        <ReactNativeZoomableView
          initialZoom={1}
          minZoom={1}
          maxZoom={2}
          zoomStep={0.1}
          style={styles.zoomableView}
        >
          <TouchableWithoutFeedback onPress={() => Alert.alert('Teste')}>
            <View style={styles.block} />
          </TouchableWithoutFeedback>
        </ReactNativeZoomableView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  zoomableView: {
    padding: 10,
    backgroundColor: 'red',
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
})
