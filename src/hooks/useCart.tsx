import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'
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

export interface ClientDataProps {
  CEP: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentType: string
}

interface CartContextDataProps {
  cart: CartProps[]
  productData: Product[]
  clientData: ClientDataProps
  newAmount: number
  addProduct: (ProductId: number) => void
  removeProduct: (id: number) => void
  updateProductAmount: ({ id, amount }: UpdateProductAmount) => void
  setNewAmount: (amount: number) => void
  setClientData: (data: ClientDataProps) => void
  saveDataClient: (data: ClientDataProps) => void
}

const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [productData, setProductData] = useState<Product[]>([])

  const [newAmount, setNewAmount] = useState(1)

  const [clientData, setClientData] = useState<ClientDataProps>(
    {} as ClientDataProps,
  )

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

  function addProduct(ProductId: number) {
    try {
      const newCart = [...cart]
      const productExists = newCart.find((product) => product.id === ProductId)
      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount

      if (productExists) {
        productExists.amount = amount
        toast.success('Product add to cart')
      } else {
        const productValidation = [...productData]
        const indexOf = productData.findIndex((item) => item.id === ProductId)
        if (!productValidation[indexOf].amount) {
          toast.error('Please inform the amount')
          return
        }
        const newProduct = productData.find((item) => item.id === ProductId)
        if (newProduct) {
          const product = {
            ...newProduct,
            amount: newAmount - 1,
          }
          toast.success('Product add to cart')
          newCart.push(product)
        }
      }

      setCart(newCart)
      setNewAmount(1)
    } catch (error) {
      console.log(error)
    }
  }

  function updateProductAmount({ id, amount }: UpdateProductAmount) {
    try {
      if (amount <= 0) {
        return
      }

      const newCart = [...cart]
      const productExistsinCart = newCart.find((product) => product.id === id)
      if (productExistsinCart) {
        productExistsinCart.amount = amount
      } else {
        const productDataWithAmount = [...productData]
        const index = productData.findIndex((item) => item.id === id)
        productDataWithAmount[index].amount = newAmount
        setProductData(productDataWithAmount)
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

  function saveDataClient(data: ClientDataProps) {
    setClientData(data)
    console.log(clientData)
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
        clientData,
        setClientData,
        saveDataClient,
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
