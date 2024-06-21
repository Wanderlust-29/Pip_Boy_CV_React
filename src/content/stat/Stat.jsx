import './Stat.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Stat() {
  const location = useLocation();

  return (
    <>
      <nav>
        <ul className='list-bottom'>
          <li>
            <Link to="status" className={location.pathname.includes('status') ? 'active' : 'inactive'}>
              Status
            </Link>
          </li>
          <li>
            <Link to="special" className={location.pathname.includes('special') ? 'active' : 'inactive'}>
              Special
            </Link>
          </li>
          <li>
            <Link to="perks" className={location.pathname.includes('perks') ? 'active' : 'inactive'}>
              Perks
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Stat;
