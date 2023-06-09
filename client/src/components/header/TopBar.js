import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions';
import Button from '../button.js';

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
  height: 32px;
  margin-right: 20px;
  border-radius: 5px;
`;

function TopBar() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userinfo = useSelector(state => state.userinfo.user);
  const id = useSelector(state => state.userinfo.user.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOutBtn = () => {
    dispatch(logout());
    navigate('/');
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
            <Link to={`/users/${id}`}>
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
