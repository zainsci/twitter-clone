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
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ tweetData: data.results, dataLoaded: true })
      );
  }
  render() {
    return (
      <div className="trend">
        {this.state.dataLoaded ? (
          this.state.tweetData.map((tweet) => (
            <Link
              to={`/${tweet.login.username}/status/${tweet.login.salt}`}
              key={tweet.login.uuid}
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
