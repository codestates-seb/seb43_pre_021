import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <ol>
            <li>
              <span>Public</span>
            </li>
            <li>
              <Link to="/questions">
                <span>Questions</span>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
          </ol>
        </li>
      </ol>
    </nav>
  );
}
export default Navigation;
