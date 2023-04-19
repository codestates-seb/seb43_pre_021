import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import { useSelector } from 'react-redux';

const TopBarBlock = styled.div`
  display: flex;
  ol {
    display: flex;
  }
  a {
    margin-left: 10px;
  }
`;

function TopBar() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userinfo = useSelector(state => state.userinfo.user);

  console.log(isLoggedIn);

  return (
    <TopBarBlock>
      {isLoggedIn === false ? (
        <ol>
          <li>
            <Link to="/login">
              <Button color="#487299" background="#E3ECF3" border="#83A6C4">
                Log in
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </li>
        </ol>
      ) : (
        <ol>
          <li>
            <Link to="/mypage">
              <img src={userinfo.img} alt="userimg" />
            </Link>
          </li>
          <li>
            <Button>Log out</Button>
          </li>
        </ol>
      )}
    </TopBarBlock>
  );
}
export default TopBar;
