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

export const coffeeList = [
  {
    id: '0001',
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    image: tradicional,
    quantity: 1,
  },
  {
    id: '0002',
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '8.90',
    image: expressoAmericano,
    quantity: 1,
  },
  {
    id: '0003',
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: '10.90',
    image: expressoCremoso,
    quantity: 1,
  },
  {
    id: '0004',
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '10.90',
    image: expressoGelado,
    quantity: 1,
  },
  {
    id: '0005',
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '12.90',
    image: cafeComLeite,
    quantity: 1,
  },
  {
    id: '0006',
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '13.90',
    image: latte,
    quantity: 1,
  },
  {
    id: '0007',
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '15.90',
    image: capuccino,
    quantity: 1,
  },
  {
    id: '0008',
    name: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '16.90',
    image: macchiato,
    quantity: 1,
  },
  {
    id: '0009',
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '17.90',
    image: mocaccino,
    quantity: 1,
  },
  {
    id: '0010',
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '17.90',
    image: chocolateQuente,
    quantity: 1,
  },
  {
    id: '0011',
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '18.90',
    image: cubano,
    quantity: 1,
  },
  {
    id: '0012',
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '19.90',
    image: havaiano,
    quantity: 1,
  },

  {
    id: '0013',
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '20.90',
    image: arabe,
    quantity: 1,
  },
  {
    id: '0014',
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '25.90',
    image: irlandes,
    quantity: 1,
  },
]
