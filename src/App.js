import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./CSS/Helper.css";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Base from "./Pages/Base";
import SignUp from "./Pages/Signup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/explore">
              <Base />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
