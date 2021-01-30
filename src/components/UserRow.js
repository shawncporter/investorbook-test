// Stylesheets
import '../styles/App.css';
import '../styles/components/UserRow.css';

import { Link } from 'react-router-dom';

function UserRow(props) {

    const { img, userName, description } = props;
    return (
        <Link to="/profile" className="user-link">
            <div className="user">
                <div className="user-row container">
                    <img src={img} alt="Avatar" />
                    <h3>{userName}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default UserRow;