import { CurrencyDollar, MapPin, CreditCard, Money, Bank } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CoffeSelectedCard } from '../../components/CoffeSelectedCard'
import { ClientDataProps, useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/format'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ButtonRadio,
  CheckOutContainer,
  FormsContainer,
  InputContainer,
  PaymentContainer,
  RequestContainer,
  SelectedCoffes,
  SelectedContainer,
} from './style'

const formDataSchemaValidation = zod.object({
  CEP: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  paymentType: zod.string(),
})

type formDataProps = zod.infer<typeof formDataSchemaValidation>

export function CheckoutPage() {
  const { cart, newAmount, saveDataClient } = useCart()

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

  const formData = useForm<formDataProps>({
    resolver: zodResolver(formDataSchemaValidation),
    defaultValues: {
      CEP: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      paymentType: '',
    },
  })

  const { register, handleSubmit, reset, watch } = formData

  function handleSaveDataClient(data: ClientDataProps) {
    saveDataClient(data)
    reset()
    navigate('/sucess')
  }
  const selected = watch('paymentType')

  return (
    /* utilizar react-hook-forms */
    <CheckOutContainer>
      <RequestContainer>
        <h1>Complete Seu pedido</h1>
        <FormsContainer
          id="clientDataForm"
          onSubmit={handleSubmit(handleSaveDataClient)}
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
                {...register('numero')}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </div>

            <div>
              <input type="text" placeholder="Bairro" {...register('bairro')} />
              <input type="text" placeholder="Cidade" {...register('cidade')} />
              <input type="text" placeholder="UF" {...register('uf')} />
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
              <ButtonRadio
                className="radio"
                type="button"
                isSelected={selected === 'Credit Card'}
              >
                <label>
                  <CreditCard size={16} color={'#8047F8'} />
                  <input
                    hidden
                    type="radio"
                    value="Credit Card"
                    {...register('paymentType')}
                  />
                  Credit Card
                </label>
              </ButtonRadio>

              <ButtonRadio
                className="radio"
                type="button"
                isSelected={selected === 'Debit Card'}
              >
                <label>
                  <Bank size={16} color={'#8047F8'} />
                  <input
                    hidden
                    type="radio"
                    value="Debit Card"
                    {...register('paymentType')}
                  />
                  Debit Card
                </label>
              </ButtonRadio>

              <ButtonRadio
                className="radio"
                type="button"
                isSelected={selected === 'Money'}
              >
                <label>
                  <Money size={16} color={'#8047F8'} />
                  <input
                    hidden
                    type="radio"
                    value="Money"
                    {...register('paymentType')}
                  />
                  Money
                </label>
              </ButtonRadio>
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
