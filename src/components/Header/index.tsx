import { useGetLocation } from '../../contexts/useLocation'

import {
  HeaderContainer,
  HeaderLogo,
  LocationContainer,
  ActionsWrapper,
  CartContainer,
  CartQuantity,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import CoffeLogo from '../../assets/coffee-delivery-logo.svg'
import { useCart } from '../../contexts/useCart'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const { city, state } = useGetLocation()
  const { cart } = useCart()
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src={CoffeLogo} alt="" />
      </HeaderLogo>

      <ActionsWrapper>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          {`${city}, ${state}`}
        </LocationContainer>
        <CartContainer onClick={() => navigate('/checkout')}>
          {!!cart.length && <CartQuantity>{cart.length}</CartQuantity>}
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
