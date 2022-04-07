import React from 'react'
import PostItem from './postItem'
import styled from '@emotion/styled'

const PostList = () => {
  return (
    <PostListWrapper>
      포스트리스트
      <PostItem />
    </PostListWrapper>
  )
}
const PostListWrapper = styled('section')`
  width: 80%;
  margin: 0 auto;
`

export default PostList
