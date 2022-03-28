import React, { FunctionComponent } from 'react'
import { GobackIconWrapper, PostHeader } from './postDetail.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

type PostHeadInfoProps = {
  title: string
  date: string
}
const PostHead: FunctionComponent<PostHeadInfoProps> = ({ title, date }) => {
  const goBackEvent = () => {
    window.history.back()
  }

  return (
    <PostHeader>
      <GobackIconWrapper onClick={() => goBackEvent()}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size="lg" />
      </GobackIconWrapper>
      <div className="date">{date}</div>
      <h1>{title}</h1>
    </PostHeader>
  )
}

export default PostHead
