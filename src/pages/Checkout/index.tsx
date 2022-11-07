import { CurrencyDollar, MapPin, CreditCard, Money, Bank } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CoffeSelectedCard } from '../../components/CoffeSelectedCard'
import {
  CheckOutContainer,
  FormsContainer,
  InputContainer,
  PaymentContainer,
  RequestContainer,
  SelectedCoffes,
  SelectedContainer,
} from './style'

export function CheckoutPage() {
  return (
    /* utilizar react-hook-forms */
    <CheckOutContainer>
      <RequestContainer>
        <h1>Complete Seu pedido</h1>
        <FormsContainer>
          <header>
            <MapPin size={22} color={'#C47F17'} />
            <div>
              <h2>Endereco de Entrega</h2>
              <span>Informe o endereco onde deseja receber seu pedido</span>
            </div>
          </header>
          <InputContainer>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="number" placeholder="Numero" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </InputContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} color={'#8047F8'} />
              <div className="paymentText">
                <h2>Pagamento</h2>
                <span>
                  O pagamento e feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>
            <div>
              {/* transformar em componente */}
              <button>
                <CreditCard size={16} color={'#8047F8'} />
                Credit Card
              </button>

              <button>
                <Bank size={16} color={'#8047F8'} />
                Debit Card
              </button>

              <button>
                <Money size={16} color={'#8047F8'} />
                Money
              </button>
            </div>
          </PaymentContainer>
        </FormsContainer>
      </RequestContainer>
      <SelectedContainer>
        <h1>Cafés Selecionados</h1>
        <SelectedCoffes>
          <CoffeSelectedCard />
          <hr />
          <CoffeSelectedCard />
          <hr />

          <section className="prices">
            <div>
              <p>Total itens</p>
              <span>R$ 29,00</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div className="totalPrices">
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </section>
          <Link to={'/sucess'}>
            <button type="submit">Confirmar Pedido</button>
          </Link>
        </SelectedCoffes>
      </SelectedContainer>
    </CheckOutContainer>
  )
}
