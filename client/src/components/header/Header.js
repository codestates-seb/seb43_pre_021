import { Link } from 'react-router-dom';
import Search from './Search';
import TopBar from './TopBar';
import Navigation from '../Navigation';

function Header() {
  return (
    <header>
      <Navigation />
      <Link to="/">로고</Link>
      <Search />
      <TopBar />
    </header>
  );
}

export default Header;
