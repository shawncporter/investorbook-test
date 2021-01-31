// Stylesheets
import '../styles/App.css';
import '../styles/components/CompanyRow.css';

import { Link } from 'react-router-dom';

function CompanyRow(props) {

    const { companyName, description, slug } = props;
    return (
        <Link to={`/Companies/${slug}`} className="company-link">
            <div className="company-row container">
                <h3>{companyName}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default CompanyRow;