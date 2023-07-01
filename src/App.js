
import './App.css';
import React from 'react';

function App() {
  const title = 'Welcome to my Blog';
  const likes = 50;
  const link = 'http://www.google.com'
  return (
    <div className="App">
      <h1> {title} </h1>
      <p>liked {likes} times</p>
      < a href={link}> google site</a>
    </div>
  );
}

export default App;
