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
  const {
    addProduct,
    newAmount,
    setNewAmount,
    updateProductAmount,
    productData,
  } = useCart()

  const currentItem = productData.map((product) => {
    return product.id === props.id
  })

  const amount = productData.map((product) => {
    return product.id === props.id && product.amount
  })

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  function handleUpdateProductAmount(id: number, amount: number) {
    setNewAmount(newAmount + amount)
    updateProductAmount({ id, amount: newAmount })
    console.log(newAmount)
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
            onClick={() => handleUpdateProductAmount(props.id, -1)}
          />
          {/* currentItem ? newAmount : 0 */}
          <span>{currentItem ? amount : 0}</span>
          <AddButton
            title="Adicionar mais um café"
            onClick={() => handleUpdateProductAmount(props.id, +1)}
          />
        </div>
        <button
          className="shoppingCartButton"
          type="button"
          onClick={() => handleAddProduct(props.id)}
        >
          <ShoppingCart size={22} weight="fill" />
        </button>
      </footer>
    </CardContainer>
  )
}
