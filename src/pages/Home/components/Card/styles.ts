import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 0.375rem 2.25rem;
  padding: 7.5rem 1.5rem 1.25rem;
  position: relative;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  /* border: 0.1px solid ${({ theme }) => theme['base-title']}; */
  transition: 200ms;

  &:hover {
    transform: scale(1.01);
  }
`
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.125rem;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
    text-align: center;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
    text-align: center;
  }
`

export const CardImage = styled.img`
  position: absolute;
  top: -1.25rem;
  height: 7.5rem;
  width: 7.5rem;
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin: 1rem 0 1.25rem;
`

export const Tag = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  color: ${({ theme }) => theme['yellow-dark']};
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
`
export const CardWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const CardCurrency = styled.div`
  color: ${({ theme }) => theme['base-text']};
  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }

  span {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
  }
`

export const CardQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
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
export const CardCartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['purple-dark']};
  transition: 200ms;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.purple};
  }
`

export const CardButton = styled.button`
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
