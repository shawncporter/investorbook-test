// Stylesheets
import '../styles/App.css';

import companyData from '../data/CompanyData';

function CompanyProfile(props) {
    const companySlug = props.match.params.companyProfile
    const company = companyData.find(company => company.slug === companySlug)

    return (
        <div>
            {company.name}
        </div>
    );
}

export default CompanyProfile;