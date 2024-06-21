import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  return (
    <header className="nav-bar">
      <nav>
        <ul className='list-top'>
          <li><Link to="/stat" className={location.pathname.includes('stat') ? 'active' : 'inactive'}>Stat</Link></li>
          <li><Link to="/exp"  className={location.pathname.includes('exp') ? 'active' : 'inactive'}>Exp</Link></li>
          <li><Link to="/data" className={location.pathname.includes('data') ? 'active' : 'inactive'}>Data</Link></li>
          <li><Link to="/map" className={location.pathname.includes('map') ? 'active' : 'inactive'}>Map</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
