import { InputContainer, InputText } from './styles'

export const Input = ({ ...rest }) => {
  return (
    <InputContainer>
      <InputText {...rest} />
    </InputContainer>
  )
}
