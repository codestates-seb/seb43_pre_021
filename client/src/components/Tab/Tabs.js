import styled from 'styled-components';
import Button from '../Btn/button';
import { useState } from 'react';

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
  const [isActive, setIsActive] = useState('profile');

  function profileBtn() {
    setIsActive('profile');
  }
  function settingBtn() {
    setIsActive('setting');
  }
  return (
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
  );
}

export default Tabs;
