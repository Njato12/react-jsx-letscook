import React, { useEffect } from 'react'
import CardSingUp from '../../components/display/card/cardSingUp/CardSingUp'
type Props = {
  del: boolean,
  setDel: React.Dispatch<React.SetStateAction<boolean>>
}

const SingUp = ({ del, setDel }: Props) => {
  useEffect(() => {
    if (del) {
      setDel(false)
    }
  }, [del])
  return (
    <CardSingUp textLS='Sign up for FOOD RECIPE' />
  )
}

export default SingUp