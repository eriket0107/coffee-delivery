import { useCart } from '../../hooks/useCart'
import {
  ContentWrapper,
  InformationContainer,
  SuccessPageContainer,
  TextContainer,
} from './styles'
import Ilustration from '../../assets/motoboy-ilustration.svg'
import { useGetLocation } from '../../hooks/useLocation'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Item } from '../../components/Item'
import { paymentMethod } from '../../helpers'

export const Success = () => {
  const { address } = useCart()
  const { city, state } = useGetLocation()

  const payment = paymentMethod(address?.payment)
  return (
    <SuccessPageContainer>
      <TextContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TextContainer>
      <ContentWrapper>
        <InformationContainer>
          <ul>
            <Item
              circleColor="purple"
              icon={<MapPin size={22} weight="fill" />}
              text={
                <>
                  Entrega em
                  <strong>
                    {' '}
                    {address?.rua}, {address?.numero}
                  </strong>
                  <br />
                  {address?.bairro} - {city}, {state}
                </>
              }
            />
            <Item
              circleColor="yellow"
              icon={<Timer size={22} weight="fill" />}
              text={
                <>
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </>
              }
            />
            <Item
              circleColor="yellow_dark"
              icon={<CurrencyDollar size={22} weight="fill" />}
              text={
                <>
                  Pagamento na entrega <br />
                  <strong>{payment}</strong>
                </>
              }
            />
          </ul>
        </InformationContainer>
        <img src={Ilustration} alt="" />
      </ContentWrapper>
    </SuccessPageContainer>
  )
}
