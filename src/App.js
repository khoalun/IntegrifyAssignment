
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage/Homepage';
import UserDetails from "./components/UserDetails/UserDetails";
const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/users/:userId" exact>
            <UserDetails />
          </Route>

          <Route component={NoMatchRoute} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
