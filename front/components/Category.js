import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const MenuStyled = styled.ul`
  color: ${props => props.theme.darkGrey};
  font-size: 16px;
`;
const MenuItemStyled = styled.li`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 32px;
    margin: 4px 0;
  }

  & > div:hover {
    color: ${props => props.theme.blue};
    cursor: pointer;
  }

  & > ul {
    display: ${props => (props.closed ? 'none' : '')};
  }
`;
const SubMenuStyled = styled.ul`
  padding: 0 16px 0 48px;
`;
const SubItemStyled = styled.li`
  height: 40px;
  margin: 4px 0 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${props => props.theme.blue};
    cursor: pointer;
  }
`;

export const Menu = ({ children }) => {
  return <MenuStyled>{children}</MenuStyled>;
};
export const MenuItem = ({ children, title }) => {
  const [isClosed, setIsClosed] = useState(true);
  const onClickMenu = useCallback(() => {
    setIsClosed(v => !v);
  }, []);

  return (
    <MenuItemStyled closed={isClosed}>
      <div onClick={onClickMenu}>
        <span>{title}</span>
        <span>
          <FontAwesomeIcon icon={isClosed ? faAngleDown : faAngleUp} />
        </span>
      </div>
      {children}
    </MenuItemStyled>
  );
};
export const SubMenu = ({ children }) => {
  return <SubMenuStyled>{children}</SubMenuStyled>;
};
export const SubItem = ({ children }) => {
  return <SubItemStyled>{children}</SubItemStyled>;
};
