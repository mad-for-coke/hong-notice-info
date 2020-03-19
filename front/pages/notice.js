import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sider from '../components/Sider';
import Content from '../components/Content';
import { LOAD_CATEGORIES_REQUEST } from '../reducers/board';

const Notice = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.board);
  useEffect(() => {
    dispatch({
      type: LOAD_CATEGORIES_REQUEST,
      data: 'notice',
    });
  }, []);
  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <Sider categories={categories} />
      <Content content={<div>hello!</div>} />
    </div>
  );
};

export default Notice;
