import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`

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
