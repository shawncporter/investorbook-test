// Stylesheets
import '../styles/App.css';
import '../styles/components/UserRow.css';

import { Link } from 'react-router-dom';

function UserRow(props) {

    const { img, userName, description, slug } = props;
    console.log(img)
    return (
        <Link to={`/Investors/${slug}`} className="user-link">
            <div className="user">
                <div className="user-row container">
                    <img src={img} alt="Avatar" className="avatar" />
                    <h3>{userName}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default UserRow;