import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { SET_CURRENT_PATH } from '../reducers/board';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64%;
  min-width: 896px;
  height: 1000px;

  padding: 56px 48px 32px;
  & > div {
    background-color: white;
    width: 100%;
  }
`;

const Subcategory = styled.ul`
  width: 100%;
  display: flex;
`;

const SubItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Content = ({ children }) => {
  const { currentPath, subcategories } = useSelector(state => state.board);
  const { Posts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onClickSubcategory = useCallback(
    id => e => {
      const newPath = {
        ...currentPath,
        subcategory: id,
      };
      dispatch({
        type: SET_CURRENT_PATH,
        data: newPath,
      });
    },
    [currentPath]
  );

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
      data: {
        ...currentPath,
      },
    });
  }, [currentPath]);
  return (
    <Section>
      <Subcategory>
        {subcategories.map(v => (
          <SubItem key={v.id} onClick={onClickSubcategory(v.id)}>
            <span>id: {v.id}</span>
            <span>{v.name}</span>
          </SubItem>
        ))}
      </Subcategory>
      <div style={{ marginTop: '30px' }}>
        <ul>
          {Posts.map(post => (
            <li key={post.id + 'abc'}>{post.title}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Content;
