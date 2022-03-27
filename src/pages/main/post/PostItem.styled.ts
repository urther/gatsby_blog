import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const PostItemWrapper = styled(Link)`
  display: flex;
  margin: 20px 0;

  * {
    margin-top: 5px;
  }
`

export const InfoWrapper = styled('div')`
  width: 100%;
  line-height: 1.5;
  margin-left: 20px;
  margin-top: 10px;
`

export const Title = styled('h2')`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 25px;
  font-weight: 700;
`

export const Date = styled('div')`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;
`
export const CategoryItem = styled('div')`
  display: inline-block;
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
`
export const Summary = styled('div')`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

export const Thumbnail = styled('div')`
  img {
    width: 270px;
    height: 240px;
    object-fit: cover;
  }
`
