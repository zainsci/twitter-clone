import React from "react";
import "./App.css";
import "./CSS/Helper.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <LandingPage signupWin={true}></LandingPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
