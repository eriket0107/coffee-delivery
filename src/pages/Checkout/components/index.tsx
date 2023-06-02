import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ChangeEvent, useState } from 'react'
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
import { useForm } from 'react-hook-form'

const FormValueSchema = z.object({
  cep: z.number().min(8, 'Digite todos os números').max(8, 'Apenas 8 números'),
  rua: z
    .number()
    .min(5, 'Digite todos os números')
    .max(30, 'Máximo carácteres'),
})
export type FormValue = z.infer<typeof FormValueSchema>

export const Checkout = () => {
  const { register, handleSubmit, watch } = useForm<FormValue>({
    resolver: zodResolver(FormValueSchema),
  })

  const [selectedOption, setSelectedOption] = useState('credit')

  const handlePaymentMethodOption = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

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
              <Input
                placeholder="Cep"
                {...(register('cep'), { valueAsNumber: true })}
                type="number"
              />
              <Input placeholder="Rua" {...register('rua')} />
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
                  value={'credit'}
                  checked={selectedOption === 'credit'}
                  onChange={(event) => handlePaymentMethodOption(event)}
                  id="credit"
                />
                <CreditCard />
                Cartão
              </Label>

              <Label htmlFor="debit" checked={selectedOption === 'debit'}>
                <CheckBox
                  type="radio"
                  value={'debit'}
                  checked={selectedOption === 'debit'}
                  onChange={(event) => handlePaymentMethodOption(event)}
                  id="debit"
                />
                <Bank />
                Débito
              </Label>
              <Label htmlFor="money" checked={selectedOption === 'money'}>
                <CheckBox
                  type="radio"
                  value={'money'}
                  checked={selectedOption === 'money'}
                  onChange={(event) => handlePaymentMethodOption(event)}
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
