import styled from 'styled-components'

export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3.5rem;
  max-width: 90rem;
  height: 34rem;
  padding: 5.625rem 0 6.875rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125em;
`

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`
export const Banner = styled.img`
  height: 22.5rem;
  width: 29.75rem;

  @media (max-width: 992px) {
    height: 12.5rem;
    width: 19.75rem;
  }
`
