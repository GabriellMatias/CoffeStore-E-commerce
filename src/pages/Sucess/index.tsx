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
          <h1>Uhu! Pedido Confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </div>
        <DeliveryInformations>
          <li>
            <i className="adress">
              <MapPin size={16} />
            </i>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {clientData.rua
                    ? clientData.rua
                    : 'Rua Joao Daniel Martinelli, 102'}
                </strong>
                <br />
                {clientData.cidade
                  ? `${clientData.cidade} - ${clientData.uf}`
                  : 'Farrapos- Porto Alegre, RS'}
              </p>
            </div>
          </li>
          <li>
            <i className="deliveryPrevision">
              <Timer size={16} />
            </i>
            <div>
              <p>
                Previsao de entrega
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
                Pagamento na entrega
                <br />
                <strong>{clientData.paymentType}</strong>
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
