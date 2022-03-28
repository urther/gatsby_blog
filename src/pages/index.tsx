import React, { FunctionComponent } from 'react'
import queryString, { ParsedQuery } from 'query-string'
import { graphql } from 'gatsby'

import { PostList, CategoryList, Introduction } from 'pages/main'
import { IndexPageProps, PostListItemType } from 'types'
import Template from 'components/common/Template'

const IndexPage: FunctionComponent<IndexPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList: string[] = ['All']
  {
    edges.forEach(
      ({
        node: {
          frontmatter: { categories },
        },
      }: PostListItemType) =>
        categories.forEach(item =>
          categoryList.includes(item) ? '' : categoryList.push(item),
        ),
    )
  }

  return (
    <Template>
      <Introduction />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
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
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`
