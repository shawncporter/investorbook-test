// Stylesheets
import '../styles/App.css';

import userData from '../data/UserData';

function Profile(props) {
    const userSlug = props.match.params.userProfile
    const user = userData.find(user => user.slug === userSlug)
    return (
        <div>
            {userSlug}
            <img src={user.img} alt="Avatar" className="avatar" />
        </div>
    );
}

export default Profile;