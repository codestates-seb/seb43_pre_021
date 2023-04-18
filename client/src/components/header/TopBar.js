import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

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
  const login = false;
  return (
    <TopBarBlock>
      {login === false ? (
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
            <Link to="/mypage">마이페이지</Link>
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
