import { Link } from 'react-router-dom';

function TopBar() {
  const login = false;
  return (
    <>
      {login === false ? (
        <ol>
          <li>
            <button>Log in</button>
          </li>
          <li>
            <button>Sign up</button>
          </li>
        </ol>
      ) : (
        <ol>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <button>Log out</button>
          </li>
        </ol>
      )}
    </>
  );
}
export default TopBar;
