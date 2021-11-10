import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home";
import Login from "./Shared/Login/Login";
import Register from "./Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
