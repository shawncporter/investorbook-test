// Stylesheets 
import './styles/App.css';
// Components
import Investors from './pages/Investors';
import Companies from './pages/Companies';
import Profile from './pages/Profile';
import CompanyProfile from './pages/CompanyProfile';
// React Router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Investors}>
            <Redirect to="/Investors" />
          </Route>
          <Route exact path="/Investors" component={Investors} />
          <Route path="/Investors/:userProfile" component={Profile} />
          <Route path="/Companies/:companyProfile" component={CompanyProfile} />
          <Route path="/Companies" component={Companies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;