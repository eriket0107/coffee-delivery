import { InputContainer, InputText } from './styles'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputContainer>
      <InputText ref={ref} {...props} />
    </InputContainer>
  )
})

Input.displayName = 'Input'
