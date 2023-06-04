import { useGetLocation } from '../../hooks/useLocation'

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
import { useCart } from '../../hooks/useCart'

export const Header = () => {
  const { city, state, latitude, longitude } = useGetLocation()
  const { cart } = useCart()
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src={CoffeLogo} alt="" />
      </HeaderLogo>

      <ActionsWrapper>
        <LocationContainer onClick={() => window.open(url, '_blank')}>
          <MapPin size={22} weight="fill" />
          {`${city}, ${state}`}
        </LocationContainer>
        <CartContainer to="/checkout">
          {!!cart.length && <CartQuantity>{cart.length}</CartQuantity>}
          <ShoppingCart size={22} weight="fill" />
        </CartContainer>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
