import { Dimensions } from 'react-native'

export const wallParams = {
  numHorizontalHoles: 10,
  numVerticalHoles: 20,
  getWallHoleSize() {
    const { width } = Dimensions.get('window')
    return Math.floor(width / this.numHorizontalHoles)
  },
  getTotalHolesNumber() {
    return this.numHorizontalHoles * this.numVerticalHoles
  },
}
