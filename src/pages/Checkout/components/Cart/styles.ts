import styled from 'styled-components'

export const CheckoutItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
  width: 448px;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 44px;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
`

export const CheckoutItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 15.375rem;
  gap: 1.25rem;
  width: 100%;
  overflow-y: auto;
`

export const CheckoutValuesBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CheckoutValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  div:nth-child(3) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
export const CheckoutValuesText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div:first-child {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

  div:first-child + div {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
export const CheckoutButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  background: ${({ theme }) => theme.yellow};
  border-radius: 6px;

  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${({ theme }) => theme.white};
  transition: 200ms;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
