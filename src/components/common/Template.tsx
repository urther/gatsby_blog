import React, { ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import { Header, Footer } from 'components'

type TemplateProps = {
  children: ReactNode
}

const Template = ({ children }: TemplateProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Template
