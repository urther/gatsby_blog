import React, { FunctionComponent } from 'react'
import { PostCategoryWrapper } from './postDetail.styled'

type category = { category: string[] }

const PostCategory: FunctionComponent<category> = ({ category }) => {
  return (
    <PostCategoryWrapper>
      <span>Categories. </span>
      {category.map(item => (
        <li>#{item}</li>
      ))}
    </PostCategoryWrapper>
  )
}

export default PostCategory
