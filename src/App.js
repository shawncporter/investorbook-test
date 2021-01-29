// Stylesheets 
import './styles/App.css';
// Components
import Nav from './components/Nav'
import Investors from './pages/Investors'
import Companies from './pages/Companies'
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Investors} />
          <Route path="/Investors" component={Investors} />
          <Route path="/Companies" component={Companies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;