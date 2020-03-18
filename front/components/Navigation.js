import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Menu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.darkBlue};

  & a {
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    height: 100%;
  }

  & a:hover,
  & a:active {
    color: white;
  }
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
`;

const Logo = styled.div`
  display: flex;
  width: 16%;
  min-width: 260px;
  height: 100%;

  align-items: center;
  font-size: 28px;
  font-weight: bold;
  padding-left: 48px;

  & a {
    text-decoration: none;
    color: white;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.darkBlue};
`;

const Navigation = () => {
  return (
    <>
      <Nav>
        <Logo>
          <Link href="/">
            <a>혼긱</a>
          </Link>
        </Logo>
        <Menu>
          <Link href="/notice/">
            <a>
              <MenuItem>공지</MenuItem>
            </a>
          </Link>
          <Link href="/board/">
            <a>
              <MenuItem>게시판</MenuItem>
            </a>
          </Link>
        </Menu>
      </Nav>
    </>
  );
};

export default Navigation;
