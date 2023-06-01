import { ReactNode } from 'react'
import { SectionContainer, SectionTitle, SectionContent } from './styles'

interface SectionProps {
  title?: string
  children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  )
}
