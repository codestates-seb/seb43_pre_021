import styled from 'styled-components';

const AskButton = styled.button`
  padding: 5.5px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  background: #4393f7;
  color: #ffffff;
  border: none;
`;

function AskBtn() {
  return <AskButton>Ask question</AskButton>;
}

export default AskBtn;
