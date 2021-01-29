// Stylesheets
import '../styles/App.css';
import '../styles/components/LabelRow.css';

function LabelRow(props) {
    const { label1, label2, label3 } = props;
    return (
        <div className="label-row container">
            <h4>{label1}</h4>
            <h4>{label2}</h4>
            <h4>{label3}</h4>
        </div>
    );
}

export default LabelRow;