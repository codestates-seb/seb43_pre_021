import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiEarthAmerica } from 'react-icons/gi';

const NavigationBlock = styled.nav`
  width: 164px;
  padding-top: 24px;
  height: calc(100vh - 72px);
  border-right: 1px solid #d9d9d9;
  li {
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 15px 10px;
    border-right: none;
    transition: 0.1s;
    &:hover {
      background: #f2f2f2;
      border-right: 3px solid #f48225;
      color: #000;
      font-weight: bold;
    }
  }
  span {
    &:not(.marL) {
      display: inline-block;
      padding: 15px 10px;
    }
  }
  .questionsIcon {
    font-size: 18px;
    margin-right: 2px;
  }
  .active {
    background: #f2f2f2;
    border-right: 3px solid #f48225;
    color: #000;
    font-weight: bold;
  }
  .marL {
    margin-left: 20px;
  }
  @media screen and (max-width: 640px) {
    height: 100%;
  }
`;

function Navigation() {
  return (
    <NavigationBlock>
      <ol>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <ol>
            <li>
              <span>Public</span>
            </li>
            <li>
              <NavLink to="/questions">
                <GiEarthAmerica className="questionsIcon" />
                Questions
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">
                <span className="marL">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <span className="marL">About</span>
              </NavLink>
            </li>
          </ol>
        </li>
      </ol>
    </NavigationBlock>
  );
}
export default Navigation;
