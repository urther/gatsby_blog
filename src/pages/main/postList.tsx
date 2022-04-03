import React from 'react'
import PostItem from './postItem'

import PostListWrapper from './postList.styled'

const PostList = () => {
  return (
    <PostListWrapper>
      포스트리스트
      <PostItem />
    </PostListWrapper>
  )
}
export default PostList
