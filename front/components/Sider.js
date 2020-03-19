import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Menu = styled.ul`
  color: ${props => props.theme.font};
  font-size: 16px;
`;
export const MenuItem = styled.li`
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

const Sidebar = styled.nav`
  width: 16%;
  height: 100%;
  min-width: 260px;
  margin-bottom: -5000px; /* any large number will do */
  padding-bottom: 5000px;
  color: ${props => props.theme.font};
  font-size: 14px;
  user-select: none;
  border-right: 1px solid ${props => props.theme.borderLight};
`;

const Sider = ({ categories }) => {
  return (
    <Sidebar>
      <Menu>
        {categories.map(category => (
          <MenuItem key={category.id}>{category.title}</MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

Sider.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Sider;
