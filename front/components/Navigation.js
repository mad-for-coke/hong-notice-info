import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Button from './Button';
import Avatar from './Avatar';

const Menu = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.backgroundDark};

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

const Logo = styled.h1`
  display: flex;
  width: 16%;
  min-width: 260px;
  height: 100%;

  align-items: center;
  font-weight: bold;
  padding-left: 48px;

  & a {
    text-decoration: none;
    color: white;
  }
`;

const Info = styled.div`
  width: 170px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.backgroundDark};
`;

const Profile = styled.a`
  display: flex;
  margin-right: 24px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  padding: 3px 6px;
  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  & div {
    margin-right: 10px;
  }
`;
const LoginButton = styled(Button)`
  margin-right: 10px;
`;

const Name = styled.span`
  font-size: 16px;
  color: white;
`;
const Navigation = () => {
  //const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const isLoggedIn = false;
  return (
    <Nav>
      <Logo>
        <Link href="/">
          <a>혼긱</a>
        </Link>
      </Logo>
      <Menu>
        <Link href="/post/">
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
      {isLoggedIn ? (
        <Link href="/profile/">
          <Profile>
            <Avatar>데</Avatar>
            <Name>니이이익익익네임</Name>
          </Profile>
        </Link>
      ) : (
        <Info>
          <LoginButton>로그인</LoginButton>
          <Link href="/signup/">
            <a>
              <Button primary>회원가입</Button>
            </a>
          </Link>
        </Info>
      )}
    </Nav>
  );
};

export default Navigation;
