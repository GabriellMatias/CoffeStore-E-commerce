import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { CheckoutPage } from './pages/Checkout'
import { SucessPage } from './pages/Sucess'
import { CartProvider } from './hooks/useCart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <Header />
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/sucess" element={<SucessPage />} />
          </Routes>
        </CartProvider>
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  )
}
