import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../components/Container';
import styled from 'styled-components';
import Tabs from '../components/Users/Tab/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from '../components/Users/UserHeader';
import EditSection from '../components/Users/Tab/SettingTab/EditSection';
import SubTabs from '../components/Users/Tab/SettingTab/SubTabs';

const MyPageBlock = styled.main`
  width: calc(100% - 164px);
  padding: 50px;
  .flex_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const SettingBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

function UserEdit() {
  let { id } = useParams();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userinfo = useSelector(state => state.userinfo.user);
  const [user, setUser] = useState([]);

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
          <Tabs isLoggedIn={isLoggedIn} user={user.id} />
          <SettingBlock>
            <SubTabs />
            <EditSection user={user} />
          </SettingBlock>
        </div>
      </MyPageBlock>
    </Container>
  );
}
export default UserEdit;
