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
        ) : null}
      </>
    );
  }
}
export default Thread;
