
// Stylesheets
import '../styles/App.css';

import Header from '../components/Header';
import LabelRow from '../components/LabelRow';

function Investors() {
    return (
        <div>
            <Header heading="Investors" />
            <LabelRow label1="Name" label2="Investments" />
        </div>
    );
}

export default Investors;