import styled from 'styled-components';
import Button from '../../button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserHeaderNav = styled.ol`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 50px;
  .active {
    color: #fff;
    background: #e5883e;
  }
`;

const TabBtn = styled(Button)`
  line-height: normal;
  padding: 9px 12px 6px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1rem;
  &:not(.active):hover {
    background: #f2f2f2;
  }
`;

function Tabs({ active, isLoggedIn, activeU, user }) {
  const id = useSelector(state => state.userinfo.user.id);

  return (
    <>
      <UserHeaderNav>
        <li>
          <TabBtn
            as={NavLink}
            to={`/users/${id}`}
            background="#fff"
            border="#fff"
            color="#999999"
            className={activeU}
          >
            Profile
          </TabBtn>
        </li>
        <>
          {isLoggedIn && id === user ? (
            <li>
              <TabBtn
                as={NavLink}
                to={`/users/edit/${id}`}
                background="#fff"
                border="#fff"
                color="#999999"
                className={active}
              >
                Setting
              </TabBtn>
            </li>
          ) : null}
        </>
      </UserHeaderNav>
    </>
  );
}

export default Tabs;
