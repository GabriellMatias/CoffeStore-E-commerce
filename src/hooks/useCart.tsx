import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
import { formatPrice } from '../utils/format'

/* da pra melhorar */
export interface Product {
  id: number
  title: string
  price: number
  imgUrl: string
  amount: number
  type: string
  classType: string
  description: string
  priceFormatted: string
}

interface CartProps {
  imgUrl: string
  id: number
  title: string
  price: number
  amount: number
  priceFormatted: string
}

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  id: number
  amount: number
}

interface CartContextDataProps {
  cart: CartProps[]
  productData: Product[]
  newAmount: number
  addProduct: (ProductId: number) => void
  removeProduct: (id: number) => void
  updateProductAmount: ({ id, amount }: UpdateProductAmount) => void
  setNewAmount: (amount: number) => void
}

const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [productData, setProductData] = useState<Product[]>([])
  const [newAmount, setNewAmount] = useState(0)

  /* loading products */
  useEffect(() => {
    async function loadProducts() {
      const reply = await api.get<Product[]>('produtos')
      const data = reply.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))
      setProductData(data)
    }
    loadProducts()
  }, [])

  async function addProduct(ProductId: number) {
    try {
      const newCart = [...cart]
      const productExists = newCart.find((product) => product.id === ProductId)
      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount

      if (productExists) {
        productExists.amount = amount
      } else {
        const newProduct = productData.find((item) => item.id === ProductId)
        if (newProduct) {
          const product = {
            ...newProduct,
            amount: 1,
          }
          /* arrumar */
          newCart.push(product)
        }
      }
      setCart(newCart)
    } catch (error) {
      console.log(error)
    }
  }

  function updateProductAmount({ id, amount }: UpdateProductAmount) {
    try {
      const newCart = [...cart]
      const productExists = newCart.find((product) => product.id === id)

      if (productExists) {
        productExists.amount = amount
      } else {
        const newProduct = productData.find((item) => item.id === id)
        if (newProduct) {
          const product = {
            ...newProduct,
            amount,
          }
          /* arrumar */
          newCart.push(product)
        }
      }
      setCart(newCart)
    } catch (error) {
      console.log(error)
    }
  }

  function removeProduct(id: number) {
    const productsWithoutDdeletedOne = cart.filter((product) => {
      return product.id !== id
    })
    setCart(productsWithoutDdeletedOne)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        updateProductAmount,
        removeProduct,
        productData,
        newAmount,
        setNewAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextDataProps {
  const context = useContext(CartContext)

  return context
}
