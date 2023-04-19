import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions';

const TopBarBlock = styled.div`
  display: flex;
  ol {
    display: flex;
  }
  a {
    margin-left: 10px;
  }
`;

const UserImg = styled.img`
  width: 33px;
  margin-right: 20px;
  border-radius: 5px;
`;

function TopBar() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userinfo = useSelector(state => state.userinfo.user);

  const dispatch = useDispatch();

  const handleLogOutBtn = () => {
    console.log('logout');
    dispatch(logout());
  };

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
              <UserImg src={userinfo.img} alt="userimg" />
            </Link>
          </li>
          <li>
            <Button onClick={handleLogOutBtn}>Log out</Button>
          </li>
        </ol>
      )}
    </TopBarBlock>
  );
}
export default TopBar;
