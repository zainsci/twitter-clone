import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Tweet from "./Tweet";

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Route path="/user/status/01">
          <div>
            <Tweet />
          </div>
        </Route>
      </Router>
    );
  }
}
