import React from "react";
import { Link } from "react-router-dom";
import Tweet from "../Components/Tweet";

class Trend extends React.Component {
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
    return (
      <div className="trend">
        {this.state.dataLoaded ? (
          this.state.tweetData.map((tweet) => (
            <Link
              to={`/${tweet.username}/status/${tweet.tweetId}`}
              key={tweet.tweetId}
            >
              <Tweet tweetData={tweet} />
            </Link>
          ))
        ) : (
          <div style={{ width: "80px", margin: "auto" }}>
            <img
              src="https://abs.twimg.com/a/1496350504/img/t1/Spinner-Dots-30fps-200px.gif"
              width="80px"
              height="80px"
              style={{ margin: "auto" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Trend;
