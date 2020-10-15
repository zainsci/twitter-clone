import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Tweet from "./Tweet";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      dataLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/zainsci/twitter-clone/master/public/Data/tweets.json"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ comments: data, dataLoaded: true }));
  }
  render() {
    return (
      <div>
        {this.state.dataLoaded
          ? this.state.comments.map((comment) => <Tweet tweetData={comment} />)
          : null}
      </div>
    );
  }
}
export default Comment;
