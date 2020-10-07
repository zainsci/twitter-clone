import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Tweet from "../Components/Tweet";

class Explore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="explore">
        <div className="explore__header">
          <h3>Trends For You</h3>
        </div>
        <div className="explore__cards">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    );
  }
}

export default Explore;
