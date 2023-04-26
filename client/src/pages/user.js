import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../components/Container';
import styled from 'styled-components';
import Tabs from '../components/Users/Tab/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileTab from '../components/Users/Tab/ProfileTab';
import UserHeader from '../components/Users/UserHeader';

const MyPageBlock = styled.main`
  width: calc(100% - 164px);
  padding: 50px;
  .flex_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function User() {
  let { id } = useParams();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userinfo = useSelector(state => state.userinfo.user);
  const [user, setUser] = useState([]);

  console.log('user', user);

  // const userData = 'http://localhost:3001/USER_DATA';

  // 실제 서버 연결용
  useEffect(() => {
    axios.get(`/members/${id}`).then(res => setUser(res.data));
  }, []);

  // useEffect(() => {
  //   axios.get(`${userData}/${id}`).then(res => setUser(res.data));
  // }, []);

  return (
    <Container>
      <MyPageBlock>
        <UserHeader isLoggedIn={isLoggedIn} user={user} userinfo={userinfo.id} />
        <div>
          <Tabs isLoggedIn={isLoggedIn} user={user.memberId} activeU={'active'} />
          <ProfileTab isLoggedIn={isLoggedIn} user={user} userinfo={userinfo.id} />
        </div>
      </MyPageBlock>
    </Container>
  );
}
export default User;
