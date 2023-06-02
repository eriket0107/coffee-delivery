import styled from 'styled-components'

export const CartCardContainer = styled.li`
  display: flex;
  padding: 0.5rem 0 2.5rem;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  gap: 3.125rem;
`

export const CardCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const CardCartBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CardCartText = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  ${({ theme }) => theme['base-subtitle']}
`

export const CartCardImage = styled.img`
  height: 4rem;
  width: 4rem;
`
export const CardCartPrice = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.313rem;
  text-align: right;
  ${({ theme }) => theme['base-text']}
`

export const CardCartButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`
export const CartCardQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 0.375rem;
  gap: 0.25rem;
  span {
    color: ${({ theme }) => theme['base-title']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  }
`
export const CardCartHandleItem = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: none;

  color: ${({ theme }) => theme.purple};
  transition: 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);

    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const CartCardRemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  background-color: ${({ theme }) => theme['base-button']};
  border: none;
  border-radius: 0.375rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};

  transition: 200ms;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    background: ${({ theme }) => theme['base-hover']};
  }
`
