import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './style'
import traditionalCoffeImg from '../../assets/traditional_coffe_img.png'

export function CoffeCard() {
  return (
    <CardContainer>
      <header>
        <img src={traditionalCoffeImg} alt="Imagem do nosso cafe tradicional" />
        <span>Tradicional</span>
      </header>
      <main>
        <h1>Expresso Tradicional</h1>
        <h2>O Tradicional Cafe feito com agua quente e graos moidos</h2>
      </main>
      <footer>
        <span>R$9,90</span>
        <div>
          {/* AJEITAR CSS DO INPUT */}
          <input type="number" />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
