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

const MyPageBlock = styled.main`
  width: calc(100% - 164px);
  margin: 50px;
  .flex_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function UserEdit() {
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
        <UserHeader isLoggedIn={isLoggedIn} user={user} />
        <div>
          <Tabs />
          <SettingTab />
        </div>
      </MyPageBlock>
    </Container>
  );
}
export default UserEdit;
