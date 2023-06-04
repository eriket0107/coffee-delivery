import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Routes'
import { GetLocationProvider } from './hooks/useLocation'
import { CartContextProvider } from './hooks/useCart'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <GetLocationProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </GetLocationProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
