import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import PostList from './main/postList'
import { Template, Introduction } from 'components'
import { PostListItemType } from 'types/types'
import queryString, { ParsedQuery } from 'query-string'
import CategoryList from 'components/category'

type IndexPageProps = {
  location: { search: string }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

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
    <>
      <Template>
        <Introduction />
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
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
          fields {
            slug
          }
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
