import React, { FunctionComponent } from 'react'

import {
  PostItemWrapper,
  Summary,
  Title,
  Date,
  CategoryItem,
  Thumbnail,
  InfoWrapper,
} from './PostItem.styled'

import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types'

type PostProps = PostFrontmatterType & { link: string }

const PostItem: FunctionComponent<PostProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <PostItemWrapper to={link}>
      <Thumbnail>
        <GatsbyImage image={gatsbyImageData} alt={`${title} 이미지`} />
      </Thumbnail>
      <InfoWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        {categories.map((category, i) => (
          <CategoryItem key={i}>{category}</CategoryItem>
        ))}
        <Summary>{summary}</Summary>
      </InfoWrapper>
    </PostItemWrapper>
  )
}

export default PostItem
