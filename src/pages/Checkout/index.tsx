import { ChangeEvent, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useCart } from '../../hooks/useCart'

import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Input } from './components/Input'
import { Section } from './components/Section'
import { CartComponent } from './components/Cart'
import { states, validateUF } from '../../utils/helpers'
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
  CheckoutButton,
  CheckoutForm,
  CheckoutMain,
  InputContainer,
  Label,
  PaymentContainer,
  TextWrapper,
} from './styles'

const addressFormSchema = z.object({
  cep: z.number().min(8, 'Informe a quantidade certa de dígitos'),
  rua: z.string().min(1, 'Informe a rua'),
  numero: z.number().min(1, 'Informe o número'),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'Informe o bairro'),
  cidade: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(2, 'Informe o UF').max(2),
  payment: z
    .string()
    .refine(
      (value) => value === 'credit' || value === 'debit' || value === 'money',
    ),
})

type AddressFormData = z.infer<typeof addressFormSchema>

export const Checkout = () => {
  const navigate = useNavigate()
  const { getAddress, address, clearItems, cart } = useCart()
  const { register, handleSubmit, setValue, formState } =
    useForm<AddressFormData>({
      resolver: zodResolver(addressFormSchema),
    })
  const [selectedOption, setSelectedOption] = useState('')

  const handlePaymentMethodOption = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('payment', event.target.value)
    setSelectedOption(event.target.value)
  }

  const handleNavigate = () => {
    navigate('/success')
  }

  const handleFormSubmit = (data: AddressFormData) => {
    getAddress(data)
    if (!cart.length) return alert('Carrinho está vazio')
    if (!data) return alert('Revise seu endereço e/ou método de pagamento.')
    if (!address) return alert('Endereço inválido')
    clearItems()
    handleNavigate()
  }

  console.log(formState.errors)
  return (
    <CheckoutMain>
      <Section title="Complete seu pedido">
        <CheckoutForm id="myForm" onSubmit={handleSubmit(handleFormSubmit)}>
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
                {...register('cep', {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
              />
              <Input
                placeholder="Rua"
                {...register('rua', { required: true })}
              />
              <InputContainer>
                <Input
                  placeholder="Número"
                  {...register('numero', {
                    required: true,
                    valueAsNumber: true,
                  })}
                  minLength={1}
                  type="number"
                />
                <Input placeholder="Complemento" {...register('complemento')} />
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Bairro"
                  {...register('bairro', { required: true })}
                />
                <Input
                  placeholder="Cidade"
                  {...register('cidade', {
                    required: true,
                  })}
                />
                <Input
                  placeholder="UF"
                  {...register('uf', {
                    required: true,
                    validate: validateUF,
                  })}
                  list="state-suggestions"
                />
                <datalist id="state-suggestions">
                  {states.map((state, index) => {
                    return (
                      <option value={state} key={index}>
                        {state}
                      </option>
                    )
                  })}
                </datalist>
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
                  id="credit"
                  checked={selectedOption === 'credit'}
                  {...register('payment', {
                    onChange: handlePaymentMethodOption,
                  })}
                />
                <CreditCard />
                Cartão
              </Label>
              <Label htmlFor="debit" checked={selectedOption === 'debit'}>
                <CheckBox
                  type="radio"
                  value={'debit'}
                  id="debit"
                  checked={selectedOption === 'debit'}
                  {...register('payment', {
                    onChange: handlePaymentMethodOption,
                  })}
                />
                <Bank />
                Débito
              </Label>
              <Label htmlFor="money" checked={selectedOption === 'money'}>
                <CheckBox
                  type="radio"
                  value={'money'}
                  id="money"
                  checked={selectedOption === 'money'}
                  {...register('payment', {
                    onChange: handlePaymentMethodOption,
                  })}
                />
                <Money />
                Money
              </Label>
            </CheckBoxForm>
          </PaymentContainer>
        </CheckoutForm>
      </Section>
      <Section title="Cafés selecionados ">
        <CartComponent>
          <CheckoutButton form="myForm" type="submit">
            Confirmar Pedido
          </CheckoutButton>
        </CartComponent>
      </Section>
    </CheckoutMain>
  )
}
