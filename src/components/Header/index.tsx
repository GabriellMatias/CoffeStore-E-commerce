import logoImg from '../../assets/Logo_coffe_delivery.svg'
import { HeaderContainer } from './style'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoImg} alt="Logo Coffe Delivery" />
      </Link>
      <nav>
        <p>
          <MapPin size={22} weight="fill" />
          Brasilia - Federal District
        </p>
        <Link to={'/checkout'}>
          <span>{cart.length}</span>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
