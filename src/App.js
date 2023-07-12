import React from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';
import Registration from './components/Registration';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <h1>Twitter 2.0</h1>
      <Registration />
      <Login />
      &nbsp;
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;