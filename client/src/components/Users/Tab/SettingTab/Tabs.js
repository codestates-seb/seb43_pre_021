import styled from 'styled-components';
import Button from '../../../button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserHeaderNav = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  li:first-child {
    margin-bottom: 20px;
  }
  .active {
    color: #fff;
    background: #e5883e;
  }
`;

const TabBtn = styled(Button)`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1rem;
`;

function Tabs() {
  const id = useSelector(state => state.userinfo.user.id);

  return (
    <>
      <UserHeaderNav>
        <li>
          <TabBtn
            as={NavLink}
            to={`/users/edit/${id}`}
            background="#fff"
            border="#fff"
            color="#999999"
          >
            Edit profile
          </TabBtn>
        </li>
        <li>
          <TabBtn
            as={NavLink}
            to={`/users/delete/${id}`}
            background="#fff"
            border="#fff"
            color="#999999"
          >
            Delete profile
          </TabBtn>
        </li>
      </UserHeaderNav>
    </>
  );
}

export default Tabs;
