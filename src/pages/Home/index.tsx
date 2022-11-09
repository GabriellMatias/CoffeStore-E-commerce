import { ShoppingCart, Coffee, Package, Timer } from 'phosphor-react'
import { Container, ContainerCoffeList, ContainerHeader } from './style'
import coffeImg from '../../assets/Image_Coffe_Home.png'
import { CoffeCard } from '../../components/CoffeCard'
import { useCart } from '../../hooks/useCart'

export function Home() {
  const { productData } = useCart()

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
              <i className="shoppingCart">
                <ShoppingCart size={16} weight="fill" color="#fff" />
              </i>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <i className="package">
                <Package size={16} weight="fill" color="#fff" />
              </i>
              <span>Embalagem Mantem o Cafe Intacto</span>
            </li>
            <li>
              <i className="deliveryTime">
                <Timer size={16} weight="fill" color="#fff" />
              </i>
              <span>Entrega Rapida e Rastreada</span>
            </li>
            <li>
              <i className="coffee">
                <Coffee size={16} weight="fill" color="#fff" />
              </i>
              <span>O Cafe chega Fresquinho ate voce</span>
            </li>
          </ul>
        </div>

        <img src={coffeImg} alt="Imagem de um copo de cafe ilustrativa" />
      </ContainerHeader>

      <ContainerCoffeList>
        <h1>Nossos Cafés</h1>

        <main>
          {productData.map((product) => {
            return (
              <CoffeCard
                key={product.id}
                id={product.id}
                type={product.type}
                title={product.title}
                classType={product.classType}
                description={product.description}
                imgUrl={product.imgUrl}
                priceFormatted={product.priceFormatted}
              />
            )
          })}
        </main>
      </ContainerCoffeList>
    </Container>
  )
}
