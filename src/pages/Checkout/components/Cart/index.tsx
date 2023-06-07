import { CartCard } from '../CartCard'
import { useCart } from '../../../../hooks/useCart'
import {
  CheckoutItemsContainer,
  CheckoutItemsList,
  CheckoutValuesBox,
  CheckoutValuesContainer,
  CheckoutValuesText,
} from './styles'
import { EmpetyState } from '../EmptyState'
import { ReactNode } from 'react'
import { priceFormat } from '../../../../utils/helpers'

interface CartComponentProps {
  children: ReactNode
}

export const CartComponent = ({ children }: CartComponentProps) => {
  const { cart, removeItemCart } = useCart()

  const subTotal = cart.reduce(
    (acc, item) => Number(acc) + item.quantity * Number(item.price),
    0,
  )
  const paymentFee = subTotal * 0.1
  const total = paymentFee + subTotal

  const handleRemoveItem = (coffeeId: string) => {
    removeItemCart(coffeeId)
  }

  return (
    <CheckoutItemsContainer>
      <CheckoutItemsList>
        {cart.length ? (
          cart.map((coffeeItem) => {
            return (
              <CartCard
                key={coffeeItem.id}
                coffeeItem={coffeeItem}
                removeItem={handleRemoveItem}
              />
            )
          })
        ) : (
          <EmpetyState />
        )}
      </CheckoutItemsList>
      <CheckoutValuesBox>
        <CheckoutValuesContainer>
          <CheckoutValuesText>
            <div>Total de itens</div>
            <div>{priceFormat.format(subTotal)}</div>
          </CheckoutValuesText>
          <CheckoutValuesText>
            <div>Entrega</div>
            <div>{priceFormat.format(paymentFee)}</div>
          </CheckoutValuesText>
          <CheckoutValuesText>
            <strong>Total</strong>
            <strong>{priceFormat.format(total)}</strong>
          </CheckoutValuesText>
        </CheckoutValuesContainer>
      </CheckoutValuesBox>
      {children}
    </CheckoutItemsContainer>
  )
}
