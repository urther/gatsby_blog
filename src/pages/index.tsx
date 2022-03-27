import React, { FunctionComponent, useMemo } from 'react'
import queryString, { ParsedQuery } from 'query-string'
import { graphql } from 'gatsby'

import GlobalStyle from 'components/common/GlobalStyle'

import { Header, Footer } from 'components'
import { PostList, CategoryList } from 'pages/main'
import { IndexPageProps } from 'types'

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

  return (
    <div>
      <GlobalStyle />
      <Header />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={['string', 'zz', 'Web']}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
      <Footer />
    </div>
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
