import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5.5px 8px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  background: ${props => props.background || '#4393f7'};
  color: ${props => props.color || 'white'};
  border: 1px solid ${props => props.border || '#4393F7'};
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
