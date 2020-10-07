import React from "react";

class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="tweet__card">
          <div className="card__header">
            <img src="#"></img>
          </div>
          <div className="card__body">
            <div className="card__body__meta">
              <span className="cbm__name">Aristotle</span>
              <span className="cbm__username">@Aristotle</span>
              <span className="cbm__time">1 hour ago</span>
            </div>
            <div className="card__body__content">
              <p>
                It is the mark of an educated mind to be able to entertain a
                thought without accepting it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tweet;
