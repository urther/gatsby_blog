import { ReactNode } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// 인덱스페이지 타입
export type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

// 카테고리 타입
export type CategoryListProps = {
  selectedCategory: string
  categoryList: string[]
}

export type CategoryItemProps = {
  active: boolean
}

export type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

// post 타입들
export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type PostListItemType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}
