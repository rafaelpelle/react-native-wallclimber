import { Dimensions } from 'react-native'

export const wallParams = {
  numHorizontalHoles: 19,
  numVerticalHoles: 19,
  getWallHoleSize() {
    const { width } = Dimensions.get('window')
    return Math.floor(width / this.numHorizontalHoles)
  },
  getTotalHolesNumber() {
    return this.numHorizontalHoles * this.numVerticalHoles
  },
}

export const colors = {
  wood: '#f1c27d',
  lightGrey: '#F0F0F0',
}

export const holdOptions = [
  {
    id: 1,
    name: 'Azul',
    description: 'Agarra o meu na mão',
    image: require('./resources/hold-1.png'),
  },
  {
    id: 2,
    name: 'Amarelo',
    description: 'Agarra o meu na mão',
    image: require('./resources/hold-2.png'),
  },
  {
    id: 3,
    name: 'Vermelho',
    description: 'Agarra o meu na mão',
    image: require('./resources/hold-3.png'),
  },
]
