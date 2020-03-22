import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 40px 0 24px 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    display: none;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & div {
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 2px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0);
  }

  &:hover input ~ div {
    background-color: #ccc;
  }

  & input:checked ~ div {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`;
const Checkbox = ({ children, ...properties }) => {
  return (
    <Label>
      <input type="checkbox" {...properties} />
      <div>
        <FontAwesomeIcon icon={faCheck} />
      </div>
      {children}
    </Label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Checkbox;
