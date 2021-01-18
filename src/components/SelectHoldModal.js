import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Modal from 'react-native-modal'
import SelectHoldModalItem from './SelectHoldModalItem'
import { colors, holdOptions } from '../constants'

export default function SelectHoldModal({ modalVisible, handleModalClose, handleSelectHold }) {
  return (
    <Modal
      style={styles.modal}
      isVisible={modalVisible}
      onBackButtonPress={handleModalClose}
      onBackdropPress={handleModalClose}
    >
      <View style={styles.modalBackground}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={holdOptions}
          renderItem={({ item }) => (
            <SelectHoldModalItem hold={item} handleSelectHold={handleSelectHold} />
          )}
          keyExtractor={({ id }) => `${id}`}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  contentContainerStyle: {
    paddingBottom: 15,
  },
  modalBackground: {
    marginTop: 'auto',
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
  },
})
