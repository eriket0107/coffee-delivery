import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 85rem;
`

export const SectionTitle = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.625rem;
    letter-spacing: 0em;
    color: ${({ theme }) => theme['base-title']};
  }
  width: 100%;
  margin-bottom: 3.375rem;
`
export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2.5rem 2rem;
`
