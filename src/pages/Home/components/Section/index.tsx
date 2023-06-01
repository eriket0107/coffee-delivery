import { ReactNode } from 'react'

import { SectionWrapper, SectionTitle, SectionContent } from './styles'

interface SectionProps {
  title?: string
  children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <SectionWrapper>
      <SectionTitle>
        <h2>{title}</h2>
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  )
}
