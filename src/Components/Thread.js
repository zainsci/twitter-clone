import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";
import Comment from "./Comment";
import Loading from "./Loading";

const GetParams = () => {
  let { id } = useParams();
  return { id };
};

export default function Thread() {
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
        <Loading />
      )}
    </>
  );
}
