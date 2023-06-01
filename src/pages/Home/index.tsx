import { useEffect, useState } from 'react'

import CoffeeBaner from '../../assets/coffee-banner.svg'

import { Section } from './components/Section'
import { Card } from './components/Card'
import { ListItems } from './components/ItemsList'
import { coffeeList } from '../../assets/content/coffeeList'

import { Banner, HomeMain, Title, HomeContainer, Information } from './styles'
import { Item, useCart } from '../../contexts/useCart'

export const Home = () => {
  const { addItemToCart } = useCart()
  const [listCoffee, setListCoffee] = useState<Item[]>([])

  useEffect(() => {
    setListCoffee(coffeeList)
  }, [])

  return (
    <HomeMain>
      <HomeContainer>
        <Information>
          <Title>
            <h1>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>
          </Title>
          <ListItems />
        </Information>
        <Banner src={CoffeeBaner} />
      </HomeContainer>
      <Section title="Nossos Cafés">
        {listCoffee.map((coffee) => {
          return (
            <Card
              key={coffee.id}
              coffeeItem={coffee}
              addItemToCart={addItemToCart}
            />
          )
        })}
      </Section>
    </HomeMain>
  )
}
