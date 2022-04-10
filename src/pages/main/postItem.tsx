import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type PostItemProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    publicURL?: string
  }
  link: string
}

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) => {
  const { publicURL } = { ...thumbnail }
  return (
    <PostItemWrapper to={link}>
      <Thumbnail>
        {publicURL ? <img src={publicURL} alt="이미지" /> : <></>}
      </Thumbnail>
      <InfoWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        {categories?.map(category => (
          <CategoryItem key={category}>{category}</CategoryItem>
        ))}
        <Summary>{summary}</Summary>
      </InfoWrapper>
    </PostItemWrapper>
  )
}

export const PostItemWrapper = styled(Link)`
  display: flex;
  margin: 60px 20px;

  @media (max-width: 768px) {
    display: inline-block;
    position: relative;
    margin: 20px 0;
  }
`

export const InfoWrapper = styled('div')`
  width: 80%;
  line-height: 1.5;
  margin-left: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-left: 10px;
    width: 95%;
  }
`

export const Title = styled('h2')`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 25px;
  font-weight: 700;
  color: #1d1d20;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Date = styled('div')`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const CategoryItem = styled('div')`
  display: inline-block;
  margin-top: 5px;
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: #1d1d20;
  font-size: 14px;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`
export const Summary = styled('div')`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Thumbnail = styled('div')`
  img {
    width: 270px;
    height: 240px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
`

export default PostItem
