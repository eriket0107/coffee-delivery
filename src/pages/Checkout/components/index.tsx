import { useState } from 'react'
import { useCart } from '../../../contexts/useCart'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AdressContainer,
  AdressForm,
  CheckBox,
  CheckBoxForm,
  CheckoutAddressContainer,
  CheckoutMain,
  InputContainer,
  Label,
  PaymentContainer,
  TextWrapper,
} from './styles'
import { Input } from './Input'
import { Section } from './Section'
import { CartComponent } from './Cart'

export const Checkout = () => {
  const { payment } = useCart()

  const [selectedOption, setSelectedOption] = useState(payment)

  return (
    <CheckoutMain>
      <Section title="Complete seu pedido">
        <CheckoutAddressContainer>
          <AdressContainer>
            <TextWrapper>
              <MapPinLine size={22} color="#C47F17" />
              <div className="text-wrapper">
                <h2>Endereço de entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TextWrapper>
            <AdressForm>
              <Input placeholder="Cep" />
              <Input placeholder="Rua" />
              <InputContainer>
                <Input placeholder="Número" />
                <Input placeholder="Complemento" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Rua" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" />
              </InputContainer>
            </AdressForm>
          </AdressContainer>

          <PaymentContainer>
            <TextWrapper>
              <CurrencyDollar size={22} color="#8047F8" />
              <div className="text-wrapper">
                <h2>Pagamentos</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </TextWrapper>

            <CheckBoxForm>
              <Label htmlFor="credit" checked={selectedOption === 'credit'}>
                <CheckBox
                  type="radio"
                  value={`${selectedOption}`}
                  checked={selectedOption === 'credit'}
                  onChange={() => setSelectedOption('credit')}
                  id="credit"
                />
                <CreditCard />
                Cartão
              </Label>

              <Label htmlFor="debit" checked={selectedOption === 'debit'}>
                <CheckBox
                  type="radio"
                  value={`${selectedOption}`}
                  checked={selectedOption === 'debit'}
                  onChange={() => setSelectedOption('debit')}
                  id="debit"
                />
                <Bank />
                Débito
              </Label>
              <Label htmlFor="money" checked={selectedOption === 'money'}>
                <CheckBox
                  type="radio"
                  value={`${selectedOption}`}
                  checked={selectedOption === 'money'}
                  onChange={() => setSelectedOption('money')}
                  id="money"
                />
                <Money />
                Money
              </Label>
            </CheckBoxForm>
          </PaymentContainer>
        </CheckoutAddressContainer>
      </Section>
      <Section title="Cafés selecionados ">
        <CartComponent />
      </Section>
    </CheckoutMain>
  )
}
