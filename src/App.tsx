import React from 'react';
import MessagesDisplay from "./components/MessagesDisplay";
import ResultsDisplay from "./components/ResultsDisplay";

const App = () =>  {
  return (
    <div className="app">
      <MessagesDisplay/>
      <input/>
      <ResultsDisplay/>

      <div className = "button-container">
        <button id = "get-results">Lets Go!</button>
        <button id = "clear-chat">Clear Chat</button>
      </div>
    </div>
  )
}

export default App;
