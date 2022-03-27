import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

import { PostListItemType } from 'types'
const PostListWrapper = styled('section')`
  width: 85%;
  margin: 0 auto;
`

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({
  selectedCategory,
  posts,
}) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <PostListWrapper>
      {postListData.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
