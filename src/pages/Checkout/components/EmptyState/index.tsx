import { ShoppingCart } from 'phosphor-react'
import { EmptyStateContainer } from './styles'

export const EmpetyState = () => {
  return (
    <EmptyStateContainer>
      <h3>Seu carrinho está vazio</h3>
      <ShoppingCart size={50} />
    </EmptyStateContainer>
  )
}
