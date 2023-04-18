import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    max-width: 1264px;
    width: 100%;
  }
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <div>{children}</div>
    </StyledContainer>
  );
}

export default Container;