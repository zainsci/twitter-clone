import React from "react";
import Laoding from "./Loading";
import Tweet from "./Tweet";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/zainsci/twitter-clone/master/public/Data/comments.json"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ comments: data, dataLoaded: true }));
  }

  render() {
    return (
      <div>
        {this.state.dataLoaded ? (
          this.state.comments.map((comment) => <Tweet tweetData={comment} />)
        ) : (
          <Laoding />
        )}
      </div>
    );
  }
}
