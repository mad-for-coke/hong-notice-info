import styled from 'styled-components';

const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  border-radius: 2px;
  border: 1px solid
    ${props => (props.primary ? props.theme.primary : props.theme.borderLight)};
  color: ${props => (props.primary ? 'white' : props.theme.primary)};
  background-color: ${props => (props.primary ? props.theme.primary : 'white')};
  font-weight: ${props => props.primary && 'bold'};

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
    outline: none;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export default Button;
