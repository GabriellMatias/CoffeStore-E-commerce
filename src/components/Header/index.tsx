import logoImg from '../../assets/Logo_coffe_delivery.svg'
import { HeaderContainer } from './style'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logo Coffe Delivery" />
      <nav>
        <p>
          <MapPin size={22} weight="fill" />
          Posse-Goias
        </p>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </nav>
    </HeaderContainer>
  )
}
