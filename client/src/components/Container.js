import styled from 'styled-components';
import Navigation from './Navigation';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .layout {
    display: flex;
    max-width: 1264px;
    width: 100%;
  }
`;
const NavigationBlock = styled.div`
  position: relative;
  .sticky {
    position: sticky;
    overflow-y: auto;
    top: 72px;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <div className="layout">
        <NavigationBlock>
          <div className="sticky">
            <Navigation />
          </div>
        </NavigationBlock>
        {children}
      </div>
    </StyledContainer>
  );
}

export default Container;
