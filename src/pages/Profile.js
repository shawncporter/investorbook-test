// Stylesheets
import '../styles/App.css';

import investorData from '../data/InvestorData';

function Profile(props) {
    const userSlug = props.match.params.userProfile
    const user = investorData.find(user => user.slug === userSlug)
    return (
        <div>
            {userSlug}
            <img src={user.img} alt="Avatar" className="avatar" />
        </div>
    );
}

export default Profile;