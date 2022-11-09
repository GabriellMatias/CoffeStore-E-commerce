import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './style'
import { useCart } from '../../hooks/useCart'

export interface CoffeCardProps {
  id: number
  type?: string
  classType?: string
  title: string
  description?: string
  imgUrl: string
  amount?: number
  price?: number
  priceFormatted: string
}

export function CoffeCard(props: CoffeCardProps) {
  const { addProduct } = useCart()

  function handleAddProduct(id: number) {
    console.log(addProduct)
    addProduct(id)
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
        <div>
          {/* AJEITAR CSS DO INPUT */}
          <input type="number" min={0} />
          <button type="button" onClick={() => handleAddProduct(props.id)}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
