/* eslint-disable no-undef */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface Item {
  id: string
  name: string
  description: string
  quantity: number
  image: string
  tags: string[]
  price: string
}

interface Address {
  cep: string
  street: string
  number: string
  complement: string
  neighbor: string
  city: string
  uf: string
}

export type paymentType = 'credit' | 'debit' | 'money' | null

interface CartContextData {
  cart: Item[]
  address: Address | undefined
  payment: paymentType
  updateItemQuantity: (itemId: string, newQuantity: number) => void
  addItemToCart: (newItem: Item) => void
  removeItemCart: (itemId: string) => void
  getAddress: (address: Address) => void
}

interface CartContextProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<Item[]>([])
  const [address, setAddress] = useState<Address>()

  const addItemToCart = (newItem: Item) => {
    setCart((prevCart) => [...prevCart, newItem])
  }

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId)
          return {
            ...item,
            quantity: newQuantity,
          }
        return item
      }),
    )
  }

  const removeItemCart = (itemId: string) => {
    const filteredCart = cart.filter((item) => item.id !== itemId)
    setCart([...filteredCart])

    localStorage.setItem(
      '@coffee-delivery-data-v-1.0.0:cart',
      JSON.stringify(filteredCart),
    )
  }

  const getAddress = (getAdd: Address) => {
    setAddress(getAdd)
  }

  useEffect(() => {
    const cartLocalStorage: any = localStorage.getItem(
      '@coffee-delivery-data-v-1.0.0:cart',
    )
    const cartLocalStorageJSON = JSON.parse(cartLocalStorage)

    if (cartLocalStorage) {
      setCart(cartLocalStorageJSON)
    }
  }, [])

  useEffect(() => {
    if (cart.length) {
      const stateJSON = JSON.stringify(cart)
      localStorage.setItem('@coffee-delivery-data-v-1.0.0:cart', stateJSON)
    }
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        updateItemQuantity,
        removeItemCart,
        payment: null,
        getAddress,
        address,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
