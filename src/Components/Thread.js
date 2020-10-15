import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";
import Comment from "./Comment";

const GetParams = () => {
  let { id } = useParams();
  return { id };
};

function Thread() {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [tweetData, setTweetData] = useState({});

  let { id } = GetParams();

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/zainsci/twitter-clone/master/public/Data/tweets.json`
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((tweet) => {
          if (tweet.tweetId === parseInt(id, 10)) {
            setTweetData(tweet);
            setDataLoaded(true);
          }
          return true;
        });
      });
  });
  return (
    <>
      {isDataLoaded ? (
        <>
          <Tweet tweetData={tweetData} isThread={true} />
          <Comment />
        </>
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
    </>
  );
}
export default Thread;
