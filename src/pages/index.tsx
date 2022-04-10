import { Template, Introduction } from 'components'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import PostList, { PostType } from './main/postList'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[]
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <>
      <Template>
        <Introduction />
        <PostList posts={edges} />
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
