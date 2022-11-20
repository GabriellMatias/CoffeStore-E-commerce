import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryInformations,
  LeftSide,
  RightSide,
  SucessPageContainer,
} from './style'
import sucessImg from '../../assets/sucess_img.png'
import { useCart } from '../../hooks/useCart'

export function SucessPage() {
  const { clientData, cart } = useCart()

  return (
    <SucessPageContainer>
      <LeftSide>
        <div>
          <h1>Heyy! Order confirmed</h1>
          <h2>Now just wait the coffee to come to you soon</h2>
        </div>
        <DeliveryInformations>
          <li>
            <i className="adress">
              <MapPin size={16} />
            </i>
            <div>
              <p>
                Delivery in{' '}
                <strong>
                  {clientData.rua
                    ? clientData.rua
                    : 'Rua Joao Daniel Martinelli, 102'}
                </strong>
                <br />
                {clientData.cidade
                  ? `${clientData.cidade} - ${clientData.uf}`
                  : 'Brasilia - Federal District'}
              </p>
            </div>
          </li>
          <li>
            <i className="deliveryPrevision">
              <Timer size={16} />
            </i>
            <div>
              <p>
                Delivery Prevision
                <br />
                <strong>
                  {cart.length > 4 ? '30 min - 50 min' : '20 min - 30 min'}
                </strong>
              </p>
            </div>
          </li>
          <li>
            <i className="paymentType">
              <CurrencyDollar size={16} />
            </i>
            <div>
              <p>
                Payment on delivery
                <br />
                <strong>
                  {clientData.paymentType ? clientData.paymentType : 'Money'}
                </strong>
              </p>
            </div>
          </li>
        </DeliveryInformations>
      </LeftSide>

      <RightSide>
        <img src={sucessImg} alt="" />
      </RightSide>
    </SucessPageContainer>
  )
}
