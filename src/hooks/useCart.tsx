import { createContext, ReactNode, useContext, useState } from 'react'

export interface Product {
  id: number
  title: string
  price: number
  image: string
  amount: number
}

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  id: number
  amount: number
}

interface CartContextDataProps {
  cart: Product[]
  addProduct: (id: number) => void
  removeProduct: (id: number) => void
  updateProductAmount: ({ id, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = (id: number) => {
    const newCart = cart
    const productExists = newCart.find((product) => product.id === id)
    const currentAmount = productExists ? productExists.amount : 0
    const newAmount = currentAmount + 1

    if (productExists) {
      productExists.amount = newAmount
    }

    console.log(newCart)
    setCart(newCart)
  }

  function updateProductAmount({ id, amount }: UpdateProductAmount) {}

  function removeProduct(id: number) {}

  return (
    <CartContext.Provider
      value={{ cart, addProduct, updateProductAmount, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextDataProps {
  const context = useContext(CartContext)

  return context
}
