import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { CategoryListProps, CategoryItemProps, GatsbyLinkProps } from 'types'
import { Wrapper } from './category.styled'

const CategoryList: FunctionComponent<CategoryListProps> = ({
  selectedCategory,
  categoryList,
}) => {
  return (
    <Wrapper>
      {categoryList.map(category => (
        <li key={category}>
          <CategoryItem
            to={`/?category=${category}`}
            active={selectedCategory === category ? true : false}
          >
            #{category}
          </CategoryItem>
        </li>
      ))}
    </Wrapper>
  )
}

export default CategoryList

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`
