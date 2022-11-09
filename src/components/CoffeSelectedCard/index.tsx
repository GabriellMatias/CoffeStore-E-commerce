import { Trash } from 'phosphor-react'
import { SelectedCoffeContainer } from './style'
import { CoffeCardProps } from '../CoffeCard'
import { useCart } from '../../hooks/useCart'

export function CoffeSelectedCard(props: CoffeCardProps) {
  const { removeProduct } = useCart()

  function handleRemoveProduct(id: number) {
    removeProduct(id)
  }

  return (
    <SelectedCoffeContainer>
      <main>
        <img src={props.imgUrl} alt="Cafe selecionado" />
        <div>
          <p>{props.title}</p>
          <div className="InputsStyle">
            <input type="number" value={props.amount} />
            <button onClick={() => handleRemoveProduct(props.id)}>
              <Trash size={16} color={'#8047F8'} />
              <span>Remover</span>
            </button>
          </div>
        </div>
      </main>
      <span>{props.priceFormatted}</span>
    </SelectedCoffeContainer>
  )
}
