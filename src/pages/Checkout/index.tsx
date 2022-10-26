import { CurrencyDollar, MapPin } from 'phosphor-react'
import {
  CheckOutContainer,
  FormsContainer,
  InputContainer,
  PaymentContainer,
  RequestContainer,
  SelectedCoffes,
} from './style'

export function CheckoutPage() {
  return (
    /* utilizar react-hook-forms */
    <CheckOutContainer>
      <RequestContainer>
        <h1>Complete Seu pedido</h1>
        <FormsContainer>
          <header>
            <MapPin size={22} />
            <div>
              <h2>Endereco de Entrega</h2>
              <span>Informe o endereco onde deseja receber seu pedido</span>
            </div>
          </header>
          <InputContainer>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />

            <input type="number" placeholder="Numero" />
            <input type="text" placeholder="Complemento" />

            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </InputContainer>
          <PaymentContainer>
            <CurrencyDollar size={32} color={'green'} />
            <h2>Pagamento</h2>
            <span>
              O pagamento e feito na entrega. Escolha a forma que deseja pagar
            </span>

            <input type="button" name="creditCard" />
            <input type="button" name="debitCard" />
            <input type="button" name="money" />
          </PaymentContainer>
        </FormsContainer>
      </RequestContainer>

      <SelectedCoffes></SelectedCoffes>
    </CheckOutContainer>
  )
}
