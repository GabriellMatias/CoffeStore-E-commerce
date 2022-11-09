import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../components/services/api'
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
}

const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [productData, setProductData] = useState<Product[]>([])
  const [newAmount, setNewAmount] = useState<number>(0)

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
      setNewAmount(currentAmount + 2)

      if (productExists) {
        productExists.amount = newAmount
      } else {
        const newProduct = productData.find((item) => item.id === ProductId)
        const product = {
          ...newProduct,
          amount: 1,
        }
        /* arrumar */
        newCart.push(product)
      }
      setCart(newCart)
    } catch (error) {
      console.log(error)
    }
  }

  function updateProductAmount({ id, amount }: UpdateProductAmount) {}

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
