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

  const handleRemoveItem = (coffeeId: string) => {
    removeItemCart(coffeeId)
  }

  const amount = cart.reduce(
    (acc, item) => {
      acc.subTotal = acc.subTotal + item.quantity * Number(item.price)
      acc.fee = acc.subTotal * 0.1
      acc.total = acc.subTotal + acc.fee

      return acc
    },
    {
      subTotal: 0,
      fee: 0,
      total: 0,
    },
  )

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
            <div>{priceFormat.format(amount.subTotal)}</div>
          </CheckoutValuesText>
          <CheckoutValuesText>
            <div>Entrega</div>
            <div>{priceFormat.format(amount.fee)}</div>
          </CheckoutValuesText>
          <CheckoutValuesText>
            <strong>Total</strong>
            <strong>{priceFormat.format(amount.total)}</strong>
          </CheckoutValuesText>
        </CheckoutValuesContainer>
      </CheckoutValuesBox>
      {children}
    </CheckoutItemsContainer>
  )
}
