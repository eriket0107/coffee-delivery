import styled from 'styled-components'

export const CheckoutAddressContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 0.375rem;
  width: 40rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const AdressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  div:nth-child(1) {
    width: 35.71%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  div:nth-child(3) {
    width: 10.71%;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem;
  gap: 2rem;
`
export const CheckBoxForm = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  input {
    display: none;
  }
`

export const Label = styled.label<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 0.375rem;
  transition: 200ms;

  border: 1px solid
    ${({ theme, checked }) => (checked ? `${theme.purple}` : 'transparent')};

  background-color: ${({ theme, checked }) =>
    checked ? `${theme['purple-light']} ` : `${theme['base-button']}`};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['base-hover']};
  }
`

export const CheckBox = styled.input``
