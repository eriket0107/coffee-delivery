import styled from 'styled-components'

export const EmptyStateContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.375rem;

  h3 {
    color: ${({ theme }) => theme['base-hover']};
  }
  svg {
    color: ${({ theme }) => theme['base-hover']};
  }
`
