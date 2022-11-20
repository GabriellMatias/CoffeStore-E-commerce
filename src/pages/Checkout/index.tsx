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
        <h1>Complete your order</h1>
        <FormsContainer
          id="clientDataForm"
          onSubmit={handleSubmit(handleSaveDataClient)}
        >
          <header>
            <MapPin size={22} color={'#C47F17'} />
            <div>
              <h2>Delivery Adress</h2>
              <span>
                Enter the address where you want to receive your order
              </span>
            </div>
          </header>
          <InputContainer>
            <input
              type="number"
              placeholder="CEP"
              required
              {...register('CEP')}
            />
            <input
              type="text"
              required
              placeholder="Street"
              {...register('rua')}
            />
            <div>
              <input
                type="number"
                required
                placeholder="Number"
                {...register('numero')}
              />
              <input
                type="text"
                required
                placeholder="Complement"
                {...register('complemento')}
              />
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="District"
                {...register('bairro')}
              />
              <input
                type="text"
                required
                placeholder="City"
                {...register('cidade')}
              />
              <input
                type="text"
                required
                placeholder="UF"
                {...register('uf')}
              />
            </div>
          </InputContainer>
          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} color={'#8047F8'} />
              <div className="paymentText">
                <h2>Payment</h2>
                <span>
                  Payment is made on delivery. Choose the shape you want pay
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
        <h1>Selected Coffes</h1>
        <SelectedCoffes>
          {cart.length ? (
            cart.map((product) => {
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
            })
          ) : (
            <strong> Any itens in cart :(</strong>
          )}

          <section className="prices">
            <div>
              <p>Total itens</p>
              <span>{totalProducts}</span>
            </div>
            <div>
              <p>Delivery</p>
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
            Confirm order
          </button>
        </SelectedCoffes>
      </SelectedContainer>
    </CheckOutContainer>
  )
}
