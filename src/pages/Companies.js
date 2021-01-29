// Stylesheets
import '../styles/App.css';
import '../styles/pages/Companies.css';

import Header from '../components/Header';
import LabelRow from '../components/LabelRow';

function Companies() {
  return (
    <div>
      <Header heading="Companies" />
      <LabelRow label1="Name" label2="Investors" />
    </div>
  );
}

export default Companies;