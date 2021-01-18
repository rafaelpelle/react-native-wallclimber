import React from 'react'
import { StyleSheet, TouchableHighlight, View, Image, Text } from 'react-native'
import { colors } from '../constants'

export default function SelectHoldModalItem({ hold, handleSelectHold }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => handleSelectHold(hold.id)}
      underlayColor={colors.lightGrey}
    >
      <>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={hold.image} />
        </View>
        <View>
          <Text style={styles.name}>{hold.name}</Text>
          <Text style={styles.description}>{hold.description}</Text>
        </View>
      </>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  imageContainer: {
    marginRight: 20,
    paddingRight: 20,
    borderRightWidth: 2,
    borderRightColor: colors.lightGrey,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color: 'grey',
  },
})
