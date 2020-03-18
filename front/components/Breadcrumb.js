import Link from 'next/link';
import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.theme.grey};
`;
const Breadcrumb = () => {
  return <Span>공지 / 학과 공지</Span>;
};

export default Breadcrumb;
