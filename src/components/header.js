import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  margin: 4rem 0;
  position: sticky;
  padding: 1rem 0;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLink = styled(Link)`
  color: #000;
  padding-right: 20px;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  ::last-child {
    margin-right: 0;
  }

  ::hover {
    border-bottom: 1px solid #000;
  }
`
const Logo = styled.div`
  font-size: 32px;
  font-weight: 900;
`

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <Logo>&#8908;</Logo>
      <div>
        <HeaderLink to="/">Posts</HeaderLink>
        <HeaderLink to="/">Projects</HeaderLink>
        <HeaderLink to="/">Contact</HeaderLink>
      </div>
    </Wrapper>
  </StyledHeader>
)

export default Header
