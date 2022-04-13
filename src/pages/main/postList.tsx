import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import PostItem from './postItem'

import { PostListItemType } from 'types/types'

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts?.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}
const PostListWrapper = styled('section')`
  width: 80%;
  margin: 0 auto;
`

export default PostList
