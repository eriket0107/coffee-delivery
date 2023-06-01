import styled from 'styled-components'

export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2.5rem;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
