import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.blue};
  font-weight: bold;
  font-size: 24px;
`;
const Home = () => {
  return (
    <>
      <Title>index Content</Title>
    </>
  );
};

export default Home;
