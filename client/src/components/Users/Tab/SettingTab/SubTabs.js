import styled from 'styled-components';
import Button from '../../../button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserHeaderNav = styled.ol`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  li {
    width: 100%;
  }
  .active {
    color: #fff;
    background: #e5883e;
  }
`;

const TabBtn = styled(Button)`
  display: flex;
  align-items: center;
  width: 100%;
  line-height: normal;
  padding: 9px 12px 6px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1rem;
  &:not(.active):hover {
    background: #f2f2f2;
  }
`;

function SubTabs() {
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

export default SubTabs;
