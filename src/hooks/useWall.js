import { useState, useEffect } from 'react'
import { wallParams } from '../constants'

export default function useWall() {
  const [wall, setWall] = useState(null)

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

  return {
    wall,
  }
}
