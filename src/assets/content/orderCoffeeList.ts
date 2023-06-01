import { v4 as uuidv4 } from 'uuid'

import arabe from '../images/coffee/arabe.svg'
import cafeComLeite from '../images/coffee/cafe-com-leite.svg'
import capuccino from '../images/coffee/capuccino.svg'
import chocolateQuente from '../images/coffee/chocolate-quente.svg'
import cubano from '../images/coffee/cubano.svg'
import expressoAmericano from '../images/coffee/expresso-americano.svg'
import expressoCremoso from '../images/coffee/expresso-cremoso.svg'
import expressoGelado from '../images/coffee/expresso-gelado.svg'
import havaiano from '../images/coffee/havaiano.svg'
import irlandes from '../images/coffee/irlandes.svg'
import latte from '../images/coffee/latte.svg'
import macchiato from '../images/coffee/macchiato.svg'
import mocaccino from '../images/coffee/mocaccino.svg'
import tradicional from '../images/coffee/tradicional.svg'

export const orderCoffeeList = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    price: '9,90',
    image: tradicional,
    amount: 3,
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    price: '9,90',
    image: tradicional,
    amount: 3,
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    price: '9,90',
    image: tradicional,
    amount: 3,
  },
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    price: '9,90',
    image: tradicional,
    amount: 3,
  },
]
