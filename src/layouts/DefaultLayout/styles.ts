import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem 10rem;
  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: 992px) {
    padding: 0 5rem;
  }
`
