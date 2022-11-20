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
          <h1>Find the perfect coffee for any time of day</h1>
          <p>
            With Coffee Delivery you get your coffee wherever you are, at any
            time hour
          </p>

          <ul>
            {/* transformar em componente */}
            <li>
              <i className="shoppingCart">
                <ShoppingCart size={16} weight="fill" color="#fff" />
              </i>
              <span>Simple and safe buy</span>
            </li>
            <li>
              <i className="package">
                <Package size={16} weight="fill" color="#fff" />
              </i>
              <span>Packaging Keeps the Coffe Intact</span>
            </li>
            <li>
              <i className="deliveryTime">
                <Timer size={16} weight="fill" color="#fff" />
              </i>
              <span>Fast and Tracked Delivery</span>
            </li>
            <li>
              <i className="coffee">
                <Coffee size={16} weight="fill" color="#fff" />
              </i>
              <span>Coffe arrives fresh until you</span>
            </li>
          </ul>
        </div>

        <img src={coffeImg} alt="Imagem de um copo de cafe ilustrativa" />
      </ContainerHeader>

      <ContainerCoffeList>
        <h1>Ours Coffes</h1>

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
                amount={product.amount}
              />
            )
          })}
        </main>
      </ContainerCoffeList>
    </Container>
  )
}
