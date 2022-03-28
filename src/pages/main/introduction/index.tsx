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
      <img src="assets/introduction.gif" alt="이미지" />
      <IntroductionInfo>
        <SubTitle>FRONTEND DEVELOPER</SubTitle>
        <Title>박민지입니다.</Title>
        <span>
          상상하는 것을 만들 수 있는 프론트엔드 개발자입니다. 제 자기소개는
          이러쿵 저렇쿵이구요 . 오다다다다 열심히 하겠습니다.
        </span>
      </IntroductionInfo>
    </IntroductionWrapper>
  )
}

export default Introduction
