import React, { useState } from 'react';

function CreateTweet() {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/api/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
        userId: 'tempUserId', // Replace this with actual user id
        posted: new Date(),
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setContent(''); // Reset content
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tweet:
        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateTweet;