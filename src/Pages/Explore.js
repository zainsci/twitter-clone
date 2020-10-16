import React from "react";
import { Link } from "react-router-dom";
import Laoding from "../Components/Loading";
import Tweet from "../Components/Tweet";

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetData: [],
      dataLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/zainsci/twitter-clone/master/public/Data/tweets.json"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ tweetData: data, dataLoaded: true }));
  }
  render() {
    let tweetData = this.state.tweetData;
    return (
      <div className="explore">
        <div className="explore__header">
          <h3>What's Happening</h3>
        </div>
        <div className="explore__cards">
          {this.state.dataLoaded ? (
            tweetData.map((tweet) => (
              <Link
                to={`/${tweet.username}/status/${tweet.tweetId}`}
                key={tweet.tweetId}
              >
                <Tweet tweetData={tweet} />
              </Link>
            ))
          ) : (
            <Laoding />
          )}
        </div>
      </div>
    );
  }
}
