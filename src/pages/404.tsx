import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import GlobalStyle from 'components/common/GlobalStyle'
import Template from 'components/common/Template'

const StyledNotFoundPage = styled('section')`
  min-height: 580px;
  display:flex;
  justify-content:center;
  align-items:center;

  div{
    text-align:center;
    line-height:1.5;

    span{
      font-weight:800;
    }

    a{
      display:block;
      cursor:pointer
      padding:6px;
      margin-top:10px;
      border:1px solid black;
    }
  }
}
`
const NotFoundPage: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <StyledNotFoundPage>
          <div>
            <span>잘못된 경로</span>입니다. <br />
            메인으로 이동해주세요.
            <Link to="/">이동하기</Link>
          </div>
        </StyledNotFoundPage>
      </Template>
    </>
  )
}

export default NotFoundPage
