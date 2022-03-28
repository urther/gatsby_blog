import { PostFrontmatterType } from '../types'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}

export type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    }
  }
}
