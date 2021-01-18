import { useState, useEffect } from 'react'
import { wallParams } from '../constants'

export default function useWall() {
  const [wall, setWall] = useState(null)
  const [selectedHole, setSelectedHole] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    initializeWall()
  }, [])

  const initializeWall = () => {
    setWall(
      Array(wallParams.getTotalHolesNumber())
        .fill(0)
        .map((_, index) => ({
          id: index,
          filledWith: null,
        })),
    )
  }

  const handleHoleLongPress = (index) => {
    setSelectedHole(index)
    setModalVisible(true)
  }

  const handleSelectHold = (holdId) => {
    const newWall = [...wall]
    newWall[selectedHole] = {
      ...newWall[selectedHole],
      filledWith: holdId,
    }
    setWall(newWall)
    setModalVisible(false)
    setSelectedHole(null)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  return {
    wall,
    modalVisible,
    handleHoleLongPress,
    handleModalClose,
    handleSelectHold,
  }
}
