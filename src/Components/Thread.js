import React from "react";
import Tweet from "./Tweet";

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoaded: false,
      tweetData: {},
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ tweetData: data.results[0], isDataLoaded: true })
      );
  }
  render() {
    return (
      <>
        {this.state.isDataLoaded ? (
          <Tweet tweetData={this.state.tweetData} isThread={true} />
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
      </>
    );
  }
}
export default Thread;
