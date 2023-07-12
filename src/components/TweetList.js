import React, { useEffect, useState } from 'react';

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
        try {
          const response = await fetch('http://localhost:8080/api/tweets');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setTweets(data);
        } catch (error) {
          console.error("There was a problem fetching the tweets:", error);
        }
      }
      fetchTweets();
  }, []);

  return (
    <div>
      <h2>Tweets</h2>
      {tweets.map((tweet, index) => (
        <div key={index}>
          <h3>{tweet.user ? tweet.user.name : 'Unknown User'}</h3>
          <p>{tweet.content}</p>
        </div>
      ))}
    </div>
  );
}

export default TweetList;
