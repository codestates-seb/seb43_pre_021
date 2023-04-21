import styled from 'styled-components';
import Button from '../button';
import { useState } from 'react';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';

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

const UserSection = styled.section``;

function Tabs() {
  const [isActive, setIsActive] = useState('profile');

  function profileBtn() {
    setIsActive('profile');
  }
  function settingBtn() {
    setIsActive('setting');
  }
  return (
    <>
      <UserHeader>
        <li>
          <TabBtn
            background="#fff"
            border="#fff"
            color="#999999"
            className={isActive === 'profile' ? 'active' : ''}
            onClick={profileBtn}
          >
            Profile
          </TabBtn>
        </li>
        <li>
          <TabBtn
            background="#fff"
            border="#fff"
            color="#999999"
            className={isActive === 'setting' ? 'active' : ''}
            onClick={settingBtn}
          >
            Setting
          </TabBtn>
        </li>
      </UserHeader>
      <UserSection>{isActive === 'profile' ? <ProfileTab /> : <SettingTab />}</UserSection>
    </>
  );
}

export default Tabs;
