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
        <NavLink exact to="/investors" activeClassName="is-active">
          <li>Investors</li>
        </NavLink>
        <NavLink to="/companies" activeClassName="is-active">
          <li>Companies</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;