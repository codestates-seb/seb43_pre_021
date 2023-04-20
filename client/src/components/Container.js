import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .layout {
    display: flex;
    max-width: 1264px;
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    nav {
      display: none;
    }
  }
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <div className="layout">{children}</div>
    </StyledContainer>
  );
}

export default Container;
