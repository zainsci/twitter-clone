import React from "react";
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
          <div style={{ width: "80px", margin: "auto" }}>
            <img
              src="https://abs.twimg.com/a/1496350504/img/t1/Spinner-Dots-30fps-200px.gif"
              width="80px"
              height="80px"
              style={{ margin: "auto" }}
              alt="Loading"
            />
          </div>
        )}
      </div>
    );
  }
}
export default Comment;
