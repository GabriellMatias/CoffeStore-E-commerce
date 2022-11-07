import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './style'
// import { useCart } from '../../hooks/useCart'

export interface CoffeCardProps {
  id?: string
  type: string
  classType?: string
  title: string
  description: string
  imgUrl: string
}

export function CoffeCard(props: CoffeCardProps) {
  // const { addProduct } = useCart()

  // function handleAddProduct(id: number) {
  //   addProduct(id)
  // }

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
        <span>R$9,90</span>
        <div>
          {/* AJEITAR CSS DO INPUT */}
          <input type="number" min={0} />
          <button /* onClick={() => handleAddProduct(1)} */>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
