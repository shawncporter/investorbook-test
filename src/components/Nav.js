// Stylesheets
import '../styles/components/Nav.css';
import '../styles/App.css';
// Link
import { NavLink } from "react-router-dom";
// Logo
import logo from '../images/logo.svg';

function Nav() {
  return (
    <nav>
      <div className="logo container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <ul className="nav-links container">
        <NavLink to="/investors" activeClassName="selected">
          <li>Investors</li>
        </NavLink>
        <NavLink to="/companies">
          <li>Companies</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;