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
  CheckoutButton,
  CheckoutForm,
  CheckoutMain,
  InputContainer,
  Label,
  PaymentContainer,
  TextWrapper,
} from './styles'
import { Input } from './components/Input'
import { Section } from './components/Section'
import { CartComponent } from './components/Cart'
import { useForm } from 'react-hook-form'
import { Address, useCart } from '../../contexts/useCart'
import { states, validateCep, validateUF } from '../../helpers'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
  const navigate = useNavigate()
  const { getAddress, address } = useCart()
  const { register, handleSubmit, watch, setValue } = useForm<Address>()
  const [selectedOption, setSelectedOption] = useState('money')

  const handlePaymentMethodOption = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('payment', event.target.value)
    setSelectedOption(event.target.value)
  }

  const cep = watch('cep')
  const rua = watch('rua')
  const numero = watch('numero')
  const bairro = watch('bairro')
  const cidade = watch('cidade')
  const uf = watch('uf')

  const isSubmitDisable = cep && rua && numero && bairro && cidade && uf
  console.log('endereço', address)

  const handleNavigate = () => {
    navigate('/success')
  }
  return (
    <CheckoutMain>
      <Section title="Complete seu pedido">
        <CheckoutForm
          id="myForm"
          onSubmit={handleSubmit((data) => {
            console.log(data)
            getAddress(data)
          })}
        >
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
                  validate: validateCep,
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
                  type="number"
                />
                <Input
                  placeholder="Complemento"
                  {...register('complemento', { required: true })}
                />
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
                  checked={selectedOption === 'credit'}
                  id="credit"
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
                  checked={selectedOption === 'debit'}
                  id="debit"
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
                  checked={selectedOption === 'money'}
                  {...register('payment', {
                    onChange: handlePaymentMethodOption,
                  })}
                  id="money"
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
          <CheckoutButton
            disabled={!isSubmitDisable}
            form="myForm"
            type="submit"
            onClick={handleNavigate}
          >
            Confirmar Pedido
          </CheckoutButton>
        </CartComponent>
      </Section>
    </CheckoutMain>
  )
}
