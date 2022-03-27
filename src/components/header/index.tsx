import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'

const StyledHeader = styled('header')``
const Wrapper = styled('div')``
const HeaderLinkWrapper = styled('div')``
const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1>슬기로운 프론트엔드</h1>

        <HeaderLinkWrapper>
          <a href="" target="_blank">
            GITHUB
          </a>
          <a href="" target="_blank">
            RESUME
          </a>
        </HeaderLinkWrapper>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
