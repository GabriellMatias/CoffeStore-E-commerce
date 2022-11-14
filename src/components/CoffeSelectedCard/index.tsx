import { Trash } from 'phosphor-react'
import { AddButton, MinusButton, SelectedCoffeContainer } from './style'
import { CoffeCardProps } from '../CoffeCard'
import { useCart } from '../../hooks/useCart'

export function CoffeSelectedCard(props: CoffeCardProps) {
  const { removeProduct, updateProductAmount } = useCart()

  function handleRemoveProduct(id: number) {
    removeProduct(id)
  }
  /* repetida [fazer componente] */
  function handleProductIncrement(product: CoffeCardProps) {
    updateProductAmount({ id: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product: CoffeCardProps) {
    updateProductAmount({ id: product.id, amount: product.amount - 1 })
  }

  return (
    <SelectedCoffeContainer>
      <main>
        <img src={props.imgUrl} alt="Cafe selecionado" />
        <div>
          <p>{props.title}</p>
          <div className="InputsStyle">
            <MinusButton
              title="Retirar mais um café"
              onClick={() => handleProductDecrement(props)}
            />
            <span>{props.amount}</span>
            <AddButton
              title="Adicionar mais um café"
              onClick={() => handleProductIncrement(props)}
            />
            <button
              className="removeButton"
              onClick={() => handleRemoveProduct(props.id)}
            >
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
