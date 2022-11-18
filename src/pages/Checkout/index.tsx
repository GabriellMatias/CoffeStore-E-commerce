import { CurrencyDollar, MapPin, CreditCard, Money, Bank } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { CoffeSelectedCard } from '../../components/CoffeSelectedCard'
import { ClientDataProps, useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/format'
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
  const { cart, newAmount, setClientData, clientData } = useCart()
  const initialPrices = formatPrice(0)
  const deliveryPriceWithProducts = formatPrice(3.5)
  const navigate = useNavigate()

  const totalWithoutDelivery = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  const totalProducts = cart.reduce((sumTotal, product) => {
    return (sumTotal += product.amount)
  }, 0)

  const total = newAmount ? totalWithoutDelivery + 3.5 : totalWithoutDelivery
  const totalFormated = formatPrice(total)

  const { register, handleSubmit } = useForm()
  return (
    /* utilizar react-hook-forms */
    <CheckOutContainer>
      <RequestContainer>
        <h1>Complete Seu pedido</h1>
        <FormsContainer
          id="clientDataForm"
          onSubmit={handleSubmit((data) => {
            setClientData(data)
            console.log(typeof data)
            console.log(clientData)

            navigate('/sucess')
          })}
        >
          <header>
            <MapPin size={22} color={'#C47F17'} />
            <div>
              <h2>Endereco de Entrega</h2>
              <span>Informe o endereco onde deseja receber seu pedido</span>
            </div>
          </header>
          <InputContainer>
            <input type="number" placeholder="CEP" {...register('CEP')} />
            <input type="text" placeholder="Rua" {...register('rua')} />
            <div>
              <input
                type="number"
                placeholder="Numero"
                {...register('Numero')}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('Complemento')}
              />
            </div>

            <div>
              <input type="text" placeholder="Bairro" {...register('Bairro')} />
              <input type="text" placeholder="Cidade" {...register('Cidade')} />
              <input type="text" placeholder="UF" {...register('UF')} />
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
          {cart.map((product) => {
            return (
              <div key={product.id}>
                <CoffeSelectedCard
                  id={product.id}
                  title={product.title}
                  imgUrl={product.imgUrl}
                  amount={product.amount}
                  priceFormatted={product.priceFormatted}
                />
                <hr />
              </div>
            )
          })}

          <section className="prices">
            <div>
              <p>Total itens</p>
              <span>{totalProducts}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>
                {cart.length ? deliveryPriceWithProducts : initialPrices}
              </span>
            </div>
            <div className="totalPrices">
              <p>Total</p>
              <span>{cart.length ? totalFormated : initialPrices}</span>
            </div>
          </section>

          <button type="submit" form="clientDataForm">
            Confirmar Pedido
          </button>
        </SelectedCoffes>
      </SelectedContainer>
    </CheckOutContainer>
  )
}
