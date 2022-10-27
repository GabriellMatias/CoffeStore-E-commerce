import { Trash } from 'phosphor-react'
import { SelectedCoffeContainer } from './style'
import traditionalCoffeImg from '../../assets/traditional_coffe_img.png'

export function CoffeSelectedCard() {
  return (
    <SelectedCoffeContainer>
      <main>
        <img src={traditionalCoffeImg} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <div className="InputsStyle">
            <input type="number" />
            <button>
              <Trash size={16} color={'#8047F8'} />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </main>
      <span>R$9,90</span>
    </SelectedCoffeContainer>
  )
}
