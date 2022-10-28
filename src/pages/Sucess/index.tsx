import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryInformations,
  LeftSide,
  RightSide,
  SucessPageContainer,
} from './style'
import sucessImg from '../../assets/sucess_img.png'

export function SucessPage() {
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
                Entrega em <strong>Rua Joao Daniel Martinelli, 102</strong>
                <br />
                Farrapos- Porto Alegre, RS
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
                <strong>20 min - 30 min</strong>
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
                <strong>Cartao de credito</strong>
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
