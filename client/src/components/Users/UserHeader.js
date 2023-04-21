import styled from 'styled-components';
import Button from '../button';
import { Link } from 'react-router-dom';

const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserImg = styled.img`
  max-width: 128px;
  max-height: 128px;
  border-radius: 50%;
  margin: 8px;
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
  padding: 10px 20px;
  border-radius: 20px;
`;

function UserHeader({ user, isLoggedIn }) {
  return (
    <div className="flex_row">
      <UserInfoBlock>
        <UserImg src={user.img} alt={`${user.displayName} 이미지`} />
        <UserInfo>
          <UserName>{user.displayName}</UserName>
          <p>가입한 날짜표시</p>
        </UserInfo>
      </UserInfoBlock>
      {isLoggedIn ? (
        <MyPageBtnBlock>
          <li>
            <Link to="">
              <MyPageBtn background="#E5883E" border="#E5883E">
                edit profile
              </MyPageBtn>
            </Link>
          </li>
          <li>
            <Link to="">
              <MyPageBtn background="#E5883E" border="#E5883E">
                delete profile
              </MyPageBtn>
            </Link>
          </li>
        </MyPageBtnBlock>
      ) : null}
    </div>
  );
}
export default UserHeader;
