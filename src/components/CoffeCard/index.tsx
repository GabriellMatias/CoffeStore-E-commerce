import { ShoppingCart } from 'phosphor-react'
import { AddButton, CardContainer, MinusButton } from './style'
import { useCart } from '../../hooks/useCart'

export interface CoffeCardProps {
  id: number
  type?: string
  classType?: string
  title: string
  description?: string
  imgUrl: string
  amount: number
  price?: number
  priceFormatted: string
}

export function CoffeCard(props: CoffeCardProps) {
  const { addProduct, cart, updateProductAmount } = useCart()

  const currentItem = cart.find((product) => {
    return product.id === props.id
  })
  const amount = cart.map((product) => {
    return product.id === props.id && product.amount
  })

  function handleAddProduct(id: number) {
    addProduct(id)
  }
  /* repetida [fazer componente] */
  function handleProductIncrement(id: number) {
    const newCart = [...cart]
    const productExists = newCart.find((product) => product.id === id)
    const currentAmount = productExists ? productExists.amount : 0
    const incrementAmount = currentAmount + 1
    updateProductAmount({ id, amount: incrementAmount })
  }

  function handleProductDecrement(id: number) {
    const newCart = [...cart]
    const productExists = newCart.find((product) => product.id === id)
    const currentAmount = productExists ? productExists.amount : 0
    const decrementAmount = currentAmount - 1

    updateProductAmount({ id, amount: decrementAmount })
  }

  return (
    <CardContainer>
      <header>
        <img src={props.imgUrl} alt="Imagem do nosso cafe tradicional" />
        <div className="textContainer">
          <span className="type">{props.type}</span>
          {props.classType && <span className="class">{props.classType}</span>}
        </div>
      </header>
      <main>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </main>
      <footer>
        <span>{props.priceFormatted}</span>
        <div className="inputStyle">
          <MinusButton
            title="Retirar mais um café"
            onClick={() => handleProductDecrement(props.id)}
          />
          <span>{currentItem ? amount : 0}</span>
          <AddButton
            title="Adicionar mais um café"
            onClick={() => handleProductIncrement(props.id)}
          />
          <button
            className="shoppingCartButton"
            type="button"
            onClick={() => handleAddProduct(props.id)}
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
