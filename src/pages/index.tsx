import { Template, Introduction } from 'components'
import { graphql } from 'gatsby'
import React from 'react'
import PostList from './main/postList'

const IndexPage = function () {
  return (
    <>
      <Template>
        <Introduction />
        <PostList />
      </Template>
    </>
  )
}

export default IndexPage
export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
