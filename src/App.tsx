import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { CheckoutPage } from './pages/Checkout'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
