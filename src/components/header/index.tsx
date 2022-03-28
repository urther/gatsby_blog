import { Link } from 'gatsby'
import React from 'react'

import { StyledHeader, Wrapper, HeaderLinkWrapper } from './header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1>
          <Link to="/">슬기로운 프론트엔드 라이프</Link>
        </h1>

        <HeaderLinkWrapper>
          <a href="https://github.com/urther" target="_blank">
            GITHUB
          </a>
          <a
            href="https://pear-meal-b3e.notion.site/0e389a94b8fc49d598563c3f30060914"
            target="_blank"
          >
            RESUME
          </a>
        </HeaderLinkWrapper>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
