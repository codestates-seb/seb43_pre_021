import styled from 'styled-components';
import Button from '../button';
import { NavLink } from 'react-router-dom';

const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserImg = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 128px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const UserName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MyPageBtnBlock = styled.ol`
  display: flex;
  flex-direction: row;
  li {
    margin-left: 10px;
  }
`;

const MyPageBtn = styled(Button)`
  line-height: normal;
  padding: 9px 15px 6px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1rem;
  color: #fff;
  background: #e5883e;
`;

function UserHeader({ user, isLoggedIn, userinfo }) {
  return (
    <div className="flex_row">
      <UserInfoBlock>
        <UserImg background={user.img} />
        <UserInfo>
          <UserName>{user.displayName}</UserName>
          <p>{String(user.createdAt).slice(0, 10)}</p>
        </UserInfo>
      </UserInfoBlock>
      {isLoggedIn && userinfo === user.memberId ? (
        <MyPageBtnBlock>
          <li>
            <MyPageBtn
              as={NavLink}
              to={`/users/edit/${user.memberId}`}
              background="#E5883E"
              border="#E5883E"
            >
              edit profile
            </MyPageBtn>
          </li>
          <li>
            <MyPageBtn
              as={NavLink}
              to={`/users/delete/${user.memberId}`}
              background="#E5883E"
              border="#E5883E"
            >
              delete profile
            </MyPageBtn>
          </li>
        </MyPageBtnBlock>
      ) : null}
    </div>
  );
}
export default UserHeader;
