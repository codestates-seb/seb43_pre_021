import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Container from '../components/Container';
import styled from 'styled-components';
import Tabs from '../components/Users/Tab/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SettingTab from '../components/Users/Tab/SettingTab';
import UserHeader from '../components/Users/UserHeader';
import DeleteSection from '../components/Users/Tab/SettingTab/DeleteSection';

const MyPageBlock = styled.main`
  width: calc(100% - 164px);
  padding: 50px;
  .flex_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function UserDelete() {
  let { id } = useParams();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userinfo = useSelector(state => state.userinfo.user);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/USER_DATA/${id}`).then(res => setUser(res.data));
  }, []);

  return (
    <Container>
      <Navigation />
      <MyPageBlock>
        <UserHeader isLoggedIn={isLoggedIn} user={user} userinfo={userinfo.id} />
        <div>
          <Tabs isLoggedIn={isLoggedIn} user={user.id} active="active" />
          <SettingTab>
            <DeleteSection />
          </SettingTab>
        </div>
      </MyPageBlock>
    </Container>
  );
}
export default UserDelete;
