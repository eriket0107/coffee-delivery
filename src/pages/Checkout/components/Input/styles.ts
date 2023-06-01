import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.72rem;
  gap: 0.25rem;

  width: 100%;

  background: ${({ theme }) => theme['base-input']};

  border: 1px solid #e6e5e5;
  border-radius: 0.25rem;
`
export const InputText = styled.input`
  background: none;
  border: none;
  font-family: Roboto;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme['base-text']};
`
