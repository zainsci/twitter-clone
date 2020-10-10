import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tweet from "./Tweet";

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
export default Thread;
