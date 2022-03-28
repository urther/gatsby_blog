import styled from '@emotion/styled'

export const IntroductionWrapper = styled('section')`
  width: 100%;
  height: 400px;
  background-color: #fcfcff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 330px;
    margin-left: 15%;
  }

  @media (max-width: 768px) {
    height: 300px;

    img {
      height: 220px;
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

export const IntroductionInfo = styled('div')`
  span {
    margin-top: 10px;
    display: inline-block;
    width: 90%;
    line-height: 1.5;
  }

  h2:hover {
    border-bottom: 2px solid #f56300;
  }
`

export const SubTitle = styled('div')`
  font-size: 20px;
  color: #f56300;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Title = styled('h2')`
  display: inline-block;
  font-size: 50px;
  margin: 10px 0;
  font-weight: 700;

  border-bottom: 2px solid transparent;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`
