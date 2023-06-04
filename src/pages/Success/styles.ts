import styled from 'styled-components'

export const SuccessPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  gap: 2rem;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: row;
  gap: 6.375rem;

  img {
    width: 492px;
    height: 293px;
  }
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  flex: 1;

  border: 2px solid ${({ theme }) => theme.purple};
  border-radius: 6px 36px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    flex: 1;
  }
`
