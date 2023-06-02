import { paymentType } from './contexts/useCart'

export function formatNumber(str: string): number {
  const number: number = parseFloat(str)
  return number
}

export const validateCep = (value: string) => {
  const cepRegex = /^[0-9]{8}$/
  return cepRegex.test(value)
}

export const states: string[] = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

export function validateUF(sigla: string): boolean {
  const states: string[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]
  const regex = new RegExp(`^(${states.join('|')})$`)
  return regex.test(sigla)
}

type paymentMethodType = paymentType | undefined

export const paymentMethod = (method: paymentMethodType) => {
  if (method === 'credit') return 'Cartão de Crédito'
  else if (method === 'debit') return 'Débito'
  else return 'Dinheiro'
}
