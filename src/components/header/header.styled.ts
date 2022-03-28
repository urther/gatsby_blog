import styled from '@emotion/styled'

export const StyledHeader = styled('header')`
  background-color: #383839;
  a {
    color: white;
  }
`
export const Wrapper = styled('div')`
  width: 83%;
  height: 35px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 800;
  }

  @media (max-width: 768px) {
    width: 93%;
  }
`

export const HeaderLinkWrapper = styled('div')`
  a {
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    a {
      margin: 0 5px;
      font-size: 15px;
    }
  }
`
