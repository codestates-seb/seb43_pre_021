import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Container from '../components/Container';
import Button from '../components/button';
import styled from 'styled-components';
import Tabs from '../components/Tab/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyPageBlock = styled.main`
  width: calc(100% - 164px);
  margin: 50px;
  .flex_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

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

function User() {
  let { id } = useParams();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/USER_DATA/${id}`).then(res => setUser(res.data));
  }, []);

  return (
    <Container>
      <Navigation />
      <MyPageBlock>
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
        <div>
          <Tabs />
        </div>
      </MyPageBlock>
    </Container>
  );
}
export default User;
