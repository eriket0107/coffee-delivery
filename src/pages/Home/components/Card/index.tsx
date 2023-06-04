import { useEffect, useState } from 'react'

import {
  CardButton,
  CardContainer,
  CardCurrency,
  CardImage,
  CardQuantity,
  CardText,
  CardWrapper,
  CardCartButton,
  Tag,
  TagContainer,
} from './styles'
import { Tooltip } from 'react-tooltip'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { Item, useCart } from '../../../../hooks/useCart'
import { formatNumber } from '../../../../helpers'

interface CoffeeCardPropsType {
  coffeeItem: Item
  addItemToCart: (coffeeItem: Item) => void
}

export const Card = ({ coffeeItem, addItemToCart }: CoffeeCardPropsType) => {
  const { description, id, image, name, price, quantity, tags } = coffeeItem

  const { cart, updateItemQuantity } = useCart()

  const [currentPrice, setCurrentPrice] = useState<number>(Number(price))
  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity)

  useEffect(() => {
    setCurrentPrice(formatNumber(price) * currentQuantity)
  }, [currentQuantity, price])

  const handleAddItemQuantity = () => {
    setCurrentQuantity((prevstate) => prevstate + 1)
  }

  const handleRemoveItemQuantity = () => {
    setCurrentQuantity((prevstate) => {
      if (prevstate === 1) return 1
      else return prevstate - 1
    })
  }

  const handleAddItemToCart = (itemId: string) => {
    const isRepetedItem = cart.find((item) => item.id === itemId)
    if (isRepetedItem) {
      updateItemQuantity(id, currentQuantity)
      return
    }
    addItemToCart(coffeeItem)
    updateItemQuantity(id, currentQuantity)
  }

  return (
    <CardContainer>
      <CardImage
        src={image}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={name}
      />
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
      <CardText>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardText>
      <Tooltip
        id="my-tooltip"
        place="top"
        style={{ backgroundColor: '#DBAC2C', color: '#222' }}
        delayShow={500}
      />
      <CardWrapper>
        <CardCurrency>
          <div>R$</div>
          <strong>{currentPrice.toFixed(2)}</strong>
        </CardCurrency>
        <div>
          <CardQuantity>
            <CardButton onClick={handleRemoveItemQuantity}>
              <Minus />
            </CardButton>
            <div>{currentQuantity}</div>
            <CardButton onClick={handleAddItemQuantity}>
              <Plus />
            </CardButton>
          </CardQuantity>
          <CardCartButton onClick={() => handleAddItemToCart(id)}>
            <ShoppingCart size={22} weight="fill" />
          </CardCartButton>
        </div>
      </CardWrapper>
    </CardContainer>
  )
}
