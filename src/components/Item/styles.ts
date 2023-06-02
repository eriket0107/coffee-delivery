import styled from 'styled-components'

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ITEM_COLORS = {
  yellow_dark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text',
} as const

export interface itemColorProp {
  circleColor: keyof typeof ITEM_COLORS
}

export const ItemImg = styled.div<itemColorProp>`
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};
  background-color: ${(props) => props.theme[ITEM_COLORS[props.circleColor]]};
`

export const ItemText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`
