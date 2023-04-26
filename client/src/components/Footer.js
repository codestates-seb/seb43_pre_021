import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/footerLogo.png';

const FooterWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 6rem;
  background-color: #23262a;
`;
const FooterBlock = styled.div`
  max-width: 1264px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    &:hover {
      h2 {
        color: #fff;
      }
    }
  }
  justify-content: space-between;
`;
const FooterLogo = styled.img`
  width: 40px;
`;
const Logo = styled.h2`
  color: #b9bec3;
  font-weight: bold;
`;

const FooterMenu = styled.ol`
  display: flex;
  flex-direction: row;
  gap: 30px;
  a {
    color: #b9bec3;
    font-weight: bold;
    &:hover {
      color: #fff;
    }
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <FooterBlock>
        <div>
          <Link to="/">
            <FooterLogo src={logo} />
            <Logo>STACK OVERFLOW</Logo>
          </Link>
        </div>
        <FooterMenu>
          <li>
            <Link to="/questions">Questions</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </FooterMenu>
      </FooterBlock>
    </FooterWrap>
  );
}

export default Footer;
