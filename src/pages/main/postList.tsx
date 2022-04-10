import React, { FunctionComponent } from 'react'
import PostItem from './postItem'
import styled from '@emotion/styled'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL?: string
      }
    }
  }
}

type PostListProps = {
  posts: PostType[]
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts?.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </PostListWrapper>
  )
}
const PostListWrapper = styled('section')`
  width: 80%;
  margin: 0 auto;
`

export default PostList
