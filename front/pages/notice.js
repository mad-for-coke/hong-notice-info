import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sider from '../components/Sider';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Main from '../components/Main';
import { LOAD_CATEGORIES_REQUEST } from '../reducers/board';

const Notice = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_CATEGORIES_REQUEST,
      data: 'notice',
    });
  }, []);

  return (
    <Main>
      <Sider />
      <Content>공지!!!!</Content>
      <Aside></Aside>
    </Main>
  );
};

export default Notice;
