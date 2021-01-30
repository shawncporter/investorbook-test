// Stylesheets
import '../styles/App.css';
import '../styles/components/CompanyRow.css';

function CompanyRow(props) {

    const { companyName, description } = props;
    return (
        <div className="company-row container">
            <h3>{companyName}</h3>
            <p>{description}</p>
        </div>
    );
}

export default CompanyRow;