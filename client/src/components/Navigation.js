import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiEarthAmerica } from 'react-icons/gi';

const NavigationBlock = styled.nav`
  width: 164px;
  padding-top: 24px;
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
    display: none;
  }
`;

function Navigation() {
  return (
    <NavigationBlock>
      <ol>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <ol>
            <li>
              <span>Public</span>
            </li>
            <li>
              <NavLink
                to="/questions"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <GiEarthAmerica className="questionsIcon" />
                Questions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="marL">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
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
