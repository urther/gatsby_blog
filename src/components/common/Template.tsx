import React, { FunctionComponent, ReactNode } from 'react'

import GlobalStyle from 'components/common/GlobalStyle'
import { Header, Footer } from 'components'

type TemplateProps = {
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
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
