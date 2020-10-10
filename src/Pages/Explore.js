import React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Tweet from "../Components/Tweet";
import Thread from "../Components/Thread";

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetData: [],
      dataLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => this.setState({ tweetData: data, dataLoaded: true }));
  }
  render() {
    let tweetData = this.state.tweetData.results;
    return (
      <Router>
        <div className="explore">
          <div className="explore__header">
            <h3>What's Happening</h3>
          </div>
          <div className="explore__cards">
            {this.state.dataLoaded
              ? tweetData.map((tweet) => (
                  <Link
                    to={`/${tweet.login.username}/status/${tweet.login.salt}`}
                  >
                    <Tweet tweetData={tweet} key={tweet.id.value} />
                  </Link>
                ))
              : null}
          </div>
        </div>
      </Router>
    );
  }
}

export default Explore;
