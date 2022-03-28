import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled('ul')`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px auto 10px auto;
  // background: #f5f5f7;
  border-top: 1px solid #f5f5f7;
  border-bottom: 1px solid #f5f5f7;

  li {
    margin-right: 20px;
  }

  a:hover {
    color: #2c7ed3;
  }

  @media (max-width: 768px) {
    li {
      margin-right: 10px;
    }
  }
`
