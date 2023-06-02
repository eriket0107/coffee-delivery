import { Item } from '../Item'

import { ItemsList } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export const ListItems = () => {
  return (
    <ItemsList>
      <Item
        circleColor="yellow_dark"
        icon={<ShoppingCart weight="fill" size={22} />}
        text="Compra simples e segura"
      />
      <Item
        circleColor="gray"
        icon={<Package weight="fill" size={22} />}
        text="Embalagem mantém o café intacto"
      />
      <Item
        circleColor="yellow"
        icon={<Timer weight="fill" size={22} />}
        text="Entrega rápida e rastreada"
      />
      <Item
        circleColor="purple"
        icon={<Coffee weight="fill" size={22} />}
        text="Entrega rápida e rastreada"
      />
    </ItemsList>
  )
}
