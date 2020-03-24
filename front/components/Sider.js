import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LOAD_SUBCATEGORIES_REQUEST } from '../reducers/board';

const Menu = styled.ul`
  font-size: 16px;
`;

const MenuItem = ({ category, children, ...props }) => {
  const Item = styled.li`
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 32px;

    background-color: ${props =>
      props.selected ? props.theme.primaryLight : 'white'};
    border-right: ${props => (props.selected ? '6px' : '0')} solid
      ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.primary};
      cursor: pointer;
    }
  `;
  const [isSelected, setIsSelected] = useState(false);
  const currentPath = useSelector(state => state.board.currentPath);
  useEffect(() => {
    setIsSelected(currentPath.category === category.id);
  }, [currentPath]);
  return (
    <Item selected={isSelected} {...props}>
      {children}
    </Item>
  );
};

const Sidebar = styled.nav`
  width: 16%;
  height: 100%;
  min-width: 260px;
  margin-bottom: -5000px; /* any large number will do */
  padding-bottom: 5000px;
  user-select: none;
  border-right: 1px solid ${props => props.theme.borderLight};
`;

const Sider = () => {
  const { currentPath, categories } = useSelector(state => state.board);
  const dispatch = useDispatch();

  const onClickCategory = useCallback(
    categoryID => e => {
      dispatch({
        type: LOAD_SUBCATEGORIES_REQUEST,
        data: {
          root: currentPath.root,
          category: categoryID,
        },
      });
    },
    [currentPath]
  );
  return (
    <Sidebar>
      <Menu>
        {categories.map(category => (
          <MenuItem
            category={category}
            key={category.id}
            onClick={onClickCategory(category.id)}
          >
            {category.name}(id: {category.id})
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default Sider;
