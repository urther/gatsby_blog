import React, { FunctionComponent } from 'react'
import { PostContentWrapper } from './postDetail.styled'
interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return (
    <PostContentWrapper
      dangerouslySetInnerHTML={{ __html: html }}
    ></PostContentWrapper>
  )
}

export default PostContent
