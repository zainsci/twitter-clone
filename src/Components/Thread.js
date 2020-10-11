import React from "react";
import Tweet from "./Tweet";

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Tweet />
      </div>
    );
  }
}
export default Thread;
