import { Link } from 'react-router-dom';
import Search from './Search';
import TopBar from './TopBar';
import Navigation from '../Navigation';
import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import logo from '../../assets/logo-stackoverflow.png';

const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 3px solid #f48225;
  height: 4.5rem;
  background-color: #f8f9f9;
`;
const HeaderBlock = styled.div`
  max-width: 1264px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .mobile_menu {
    display: none;
  }
  @media screen and (max-width: 640px) {
    .mobile_menu {
      display: block;
    }
  }
`;
const HeaderLogo = styled.img`
  width: 150px;
  height: 30px;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggledMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <HeaderWrap>
      <HeaderBlock>
        <HiMenu onClick={toggledMenu} className="mobile_menu" />
        {isOpen ? <Navigation /> : null}
        <Link to="/">
          <HeaderLogo src={logo} />
        </Link>
        <Search />
        <TopBar />
      </HeaderBlock>
    </HeaderWrap>
  );
}

export default Header;
