import { ShoppingCart } from 'phosphor-react'
import { Container, ContainerHeader } from './style'
import coffeImg from '../../../public/Image_Coffe_Home.png'

export function Home() {
  return (
    <Container>
      <ContainerHeader>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            {/* transformar em componente */}
            <li>
              <i>
                <ShoppingCart size={16} weight="fill" />
              </i>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <i>
                <ShoppingCart size={16} weight="fill" />
              </i>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <i>
                <ShoppingCart size={16} weight="fill" />
              </i>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <i>
                <ShoppingCart size={16} weight="fill" />
              </i>
              <span>Compra simples e segura</span>
            </li>
          </ul>
        </div>

        <img src={coffeImg} alt="Imagem de um copo de cafe ilustrativa" />
      </ContainerHeader>
    </Container>
  )
}
