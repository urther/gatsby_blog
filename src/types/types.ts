import { ReactNode } from 'react'
export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    publicURL: string
  }
}

export type PostListItemType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}

// 카테고리 부분

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
