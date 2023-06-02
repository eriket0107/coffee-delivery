import { useCart } from '../../contexts/useCart'

export const SuccessPage = () => {
  const { address, cart } = useCart()
  console.log('address:', address)
  console.log('cart:', cart)
  return <h1>SuccessPage</h1>
}
