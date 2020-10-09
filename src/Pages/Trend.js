import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Tweet from "../Components/Tweet";

class Trend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="trend">
          <Tweet userId="1" />
          <Tweet userId="2" />
          <Tweet userId="3" />
          <Tweet userId="4" />
          <Tweet userId="5" />
          <Tweet userId="6" />
        </div>
      </Router>
    );
  }
}

export default Trend;
