import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Menu, MenuItem, SubMenu, SubItem } from './Category';

const Sidebar = styled.nav`
  width: 16%;
  height: 100%;
  min-width: 260px;
  margin-bottom: -5000px; /* any large number will do */
  padding-bottom: 5000px;
  color: ${props => props.theme.darkGrey};
  font-size: 14px;
  user-select: none;
`;

const Sider = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem title="Category 1">
          <SubMenu>
            <SubItem>서브 카테고리 1</SubItem>
            <SubItem>서브 카테고리 2</SubItem>
          </SubMenu>
        </MenuItem>
        <MenuItem title="Category 2">
          <SubMenu>
            <SubItem>sub category 1</SubItem>
            <SubItem>sub category 2</SubItem>
            <SubItem>sub category 3</SubItem>
            <SubItem>sub category 4</SubItem>
          </SubMenu>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sider;
