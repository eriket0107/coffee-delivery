import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 90rem;
`
export const HeaderLogo = styled(Link)`
  transition: 200ms;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ActionsWrapper = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export const LocationContainer = styled.a`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.375rem;

  font-size: 0.875rem;
  line-height: 1.138rem;
  gap: 0.25rem;
  align-items: center;

  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  transition: 200ms;
  svg {
    fill: ${({ theme }) => theme['purple-dark']};
    transition: 200ms;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme['purple-light']};
    svg {
      fill: ${({ theme }) => theme['purple-light']};
    }
  }
`
export const CartContainer = styled(Link)`
  display: flex;
  padding: 0.5rem;
  border-radius: 0.375rem;

  font-size: 0.875rem;
  line-height: 1.138rem;
  align-items: center;
  background-color: ${({ theme }) => theme['yellow-light']};
  transition: 200ms;
  position: relative;
  svg {
    fill: ${({ theme }) => theme['yellow-dark']};
  }

  &:hover {
    cursor: pointer;
    svg {
      fill: ${({ theme }) => theme.yellow};
    }
  }
`
export const CartQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;

  position: absolute;
  width: 20px;
  height: 20px;
  right: -8.35px;
  top: -8px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.06em;
  text-align: center;
`
