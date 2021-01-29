// Stylesheets
import '../styles/App.css';
import '../styles/components/UserRow.css';


function UserRow(props) {
    const { img, userName, description } = props;
    return (
        <div className="user-row container">
            <div>{img}</div>
            <h3>{userName}</h3>
            <p>{description}</p>
        </div>
    );
}

export default UserRow;