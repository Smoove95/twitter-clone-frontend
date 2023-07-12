import React from 'react';

function Tweet({ tweet }) {
  return (
    <div>
      <h2>{tweet.content}</h2>
      <p>Posted by {tweet.userId} at {tweet.posted}</p>
      {/* Render likes, retweets, and replies */}
    </div>
  );
}

export default Tweet;