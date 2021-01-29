// Stylesheets
import '../styles/App.css';
import '../styles/components/Header.css';

// Icons
import { MdSearch } from 'react-icons/md';



function Header(props) {
    const { heading } = props;
    return (
        <div className="cta container">
            <h1>{heading}</h1>
            <label className="search-label" htmlFor="search-input">
                <input type="text" placeholder="Search.." />
                <MdSearch className="search-icon" />
            </label>
            <button>Add Investor</button>
        </div>
    );
}

export default Header;