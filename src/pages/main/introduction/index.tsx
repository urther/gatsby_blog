import React from 'react'
import {
  IntroductionWrapper,
  IntroductionInfo,
  SubTitle,
  Title,
} from './introduction.styled'

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <video autoPlay loop muted playsInline>
        <source
          src="/assets/introduction.webm"
          height={'330px'}
          type="video/webm"
        />
        {/* <img src="assets/introduction.gif" height="330px" alt="이미지" /> */}
      </video>
      <IntroductionInfo>
        <SubTitle>FRONTEND DEVELOPER</SubTitle>
        <Title>박민지입니다.</Title>
        <span>
          상상하는 것을 만들 수 있는 프론트엔드 개발자입니다.
          <br /> 좋은 결과물을 만들어내는 일에 보람을 느끼고 사랑하는 사람입니다
        </span>
      </IntroductionInfo>
    </IntroductionWrapper>
  )
}

export default Introduction
