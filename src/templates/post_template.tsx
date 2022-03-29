import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Template from 'components/common/Template'

import { PostHead, PostContent, PostCategory } from 'pages/detail'
import { PostTemplateProps } from './types'
import CommentWidget from 'pages/detail/CommentWidget'

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [
    {
      node: {
        html,
        frontmatter: { title, date, categories },
      },
    },
  ] = edges

  return (
    <Template>
      <PostHead title={title} date={date} />
      <PostContent html={html} />
      <PostCategory category={categories} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
