import React, { FunctionComponent } from 'react'
import { FooterWrapper } from './footer.styled'

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <span>오늘도 좋은 하루 보내세요 :) </span>
      <div>
        <span>@2022 By </span>
        <a href="" target="_blank">
          URTHER
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer
