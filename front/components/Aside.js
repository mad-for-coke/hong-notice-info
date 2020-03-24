import React from 'react';
import styled from 'styled-components';

const AsideStyled = styled.aside`
  height: 100%;
  border-left: 1px solid ${props => props.theme.borderLight};
  margin-bottom: -5000px; /* any large number will do */
  padding-bottom: 5000px;
`;
const Aside = () => {
  return <AsideStyled>사이드바</AsideStyled>;
};

export default Aside;
