import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className='d-flex flex-row navigation-list py-3 py-sm-5'>
          <li className='navigation-link'>
            <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : "" }>Main Screen</NavLink>
          </li>
          <li className='navigation-link'>
            <NavLink
            to="/color-1"
            className={({ isActive }) => isActive ? "active" : "" }>Set color #1</NavLink>
          </li>
          <li className='navigation-link'>
            <NavLink
            to="/color-2"
            className={({ isActive }) => isActive ? "active" : "" }>Set color #2</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
