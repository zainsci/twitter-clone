import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./CSS/Helper.css";
import LandingPage from "./Pages/LandingPage";
import Base from "./Pages/Base";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/explore" component={Base} />
            <Route path="/trends/:trend" component={Base} />
            <Route path="/:user/status/:id" component={Base} />
            <Route path="/:username" component={Base} />
          </Switch>
        </Router>
      </div>
    );
  }
}
