import React from 'react';
import MessagesDisplay from "./components/MessagesDisplay";
import ResultsDisplay from "./components/ResultsDisplay";

const App = () =>  {
  return (
    <div className="app">
        <MessagesDisplay/>
        <div className="inputs">
            <p className="title">What would you like a workout for?</p>
            <input/>
            <p className="title">Duration (min) :</p>
            <input/>
        </div>
        <ResultsDisplay/>

      <div className = "button-container">
        <button id = "get-results">Lets Go!</button>
        <button id = "clear-chat">Clear Chat</button>
      </div>
    </div>
  )
}

export default App;
