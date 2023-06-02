/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import { ItemContainer, ItemImg, ItemText } from './styles'

type colorType = 'yellow' | 'purple' | 'yellow_dark' | 'gray'

interface itemsProps {
  text: string | ReactNode
  circleColor: colorType
  icon: ReactNode
}

export const Item = ({ circleColor, text, icon }: itemsProps) => {
  return (
    <ItemContainer>
      <ItemImg circleColor={circleColor}>{icon}</ItemImg>
      <ItemText>{text}</ItemText>
    </ItemContainer>
  )
}
