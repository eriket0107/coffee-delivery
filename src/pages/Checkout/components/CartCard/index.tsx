import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CardCartBox,
  CardCartButtonBox,
  CardCartHandleItem,
  CardCartPrice,
  CardCartText,
  CardCartWrapper,
  CartCardContainer,
  CartCardImage,
  CartCardQuantity,
  CartCardRemoveButton,
} from './styles'
import { useEffect, useState } from 'react'
import { formatNumber } from '../../../../helpers'
import { Item, useCart } from '../../../../contexts/useCart'

interface CartCardProps {
  coffeeItem: Item
  removeItem: (id: string) => void
}

export const CartCard = ({ coffeeItem, removeItem }: CartCardProps) => {
  const { id, quantity, image, price, name } = coffeeItem

  const { updateItemQuantity } = useCart()

  const [itemPrice, setItemPrice] = useState<number>(0)

  const handleAddQuantity = () => {
    const newQuantity = quantity + 1
    updateItemQuantity(id, newQuantity)
  }

  const handleRemoveQuantity = () => {
    if (quantity === 1) return
    const newQuantity = quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  useEffect(() => {
    setItemPrice(formatNumber(price) * quantity)
  }, [quantity, price])

  return (
    <CartCardContainer>
      <CardCartWrapper>
        <CartCardImage src={image} />
        <CardCartBox>
          <CardCartText>{name}</CardCartText>
          <CardCartButtonBox>
            <CartCardQuantity>
              <CardCartHandleItem onClick={handleRemoveQuantity}>
                <Minus />
              </CardCartHandleItem>
              {quantity}
              <CardCartHandleItem onClick={handleAddQuantity}>
                <Plus />
              </CardCartHandleItem>
            </CartCardQuantity>
            <CartCardRemoveButton onClick={() => removeItem(id)}>
              <Trash size={16} />
              Remover
            </CartCardRemoveButton>
          </CardCartButtonBox>
        </CardCartBox>
      </CardCartWrapper>
      <CardCartPrice>R${itemPrice.toFixed(2)}</CardCartPrice>
    </CartCardContainer>
  )
}
