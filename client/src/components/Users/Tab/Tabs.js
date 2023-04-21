import styled from 'styled-components';
import Button from '../../button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserHeader = styled.ol`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
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
      <UserHeader>
        <li>
          <TabBtn as={NavLink} to={`/users/${id}`} background="#fff" border="#fff" color="#999999">
            Profile
          </TabBtn>
        </li>
        <li>
          <TabBtn
            as={NavLink}
            to={`/users/edit/${id}`}
            background="#fff"
            border="#fff"
            color="#999999"
          >
            Setting
          </TabBtn>
        </li>
      </UserHeader>
    </>
  );
}

export default Tabs;
