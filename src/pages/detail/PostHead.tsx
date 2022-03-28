import React, { FunctionComponent } from 'react'
import { PostHeader } from './postDetail.styled'

type PostHeadInfoProps = {
  title: string
  date: string
}
const PostHead: FunctionComponent<PostHeadInfoProps> = ({ title, date }) => {
  return (
    <PostHeader>
      <div>{date}</div>
      <h1>{title}</h1>
    </PostHeader>
  )
}

export default PostHead
