import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sider from '../components/Sider';
import Content from '../components/Content';
import Main from '../components/Main';
import { LOAD_CATEGORIES_REQUEST } from '../reducers/board';

const Board = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_CATEGORIES_REQUEST,
      data: 'board',
    });
  }, []);
  return (
    <Main>
      <Sider />
      <Content>게시판!!!!</Content>
    </Main>
  );
};

export default Board;
