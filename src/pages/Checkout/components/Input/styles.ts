import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.72rem;
  gap: 0.25rem;

  width: 100%;

  background: ${({ theme }) => theme['base-input']};

  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 0.25rem;

  &:focus-within {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }
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
  width: 100%;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
