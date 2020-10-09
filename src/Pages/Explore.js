import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Tweet from "../Components/Tweet";

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="explore">
          <div className="explore__header">
            <h3>What's Happening</h3>
          </div>
          <div className="explore__cards">
            <Tweet postId="1" />
            <Tweet postId="2" />
            <Tweet postId="3" />
            <Tweet postId="4" />
            <Tweet postId="5" />
          </div>
        </div>
      </Router>
    );
  }
}

export default Explore;
