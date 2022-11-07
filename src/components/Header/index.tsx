import logoImg from '../../assets/Logo_coffe_delivery.svg'
import { HeaderContainer } from './style'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoImg} alt="Logo Coffe Delivery" />
      </Link>
      <nav>
        <p>
          <MapPin size={22} weight="fill" />
          Posse-Goias
        </p>
        <Link to={'/checkout'}>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
