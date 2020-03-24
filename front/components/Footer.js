import styled from 'styled-components';

const Span = styled.span``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.backgroundLight};
  padding: 20px 60px;
  & span {
    color: ${props => props.theme.font};
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <span>혼긱 ©2020 Created by Mad for Coke</span>;
    </Wrapper>
  );
};

export default Footer;
