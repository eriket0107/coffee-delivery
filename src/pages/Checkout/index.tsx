import { Adress } from './components/Address '
import { CartComponent } from './components/Cart'
import { Section } from './components/Section'
import { CheckoutMain } from './styles'

export const Checkout = () => {
  return (
    <CheckoutMain>
      <Section title="Complete seu pedido">
        <Adress />
      </Section>
      <Section title="Cafés selecionados ">
        <CartComponent />
      </Section>
    </CheckoutMain>
  )
}
