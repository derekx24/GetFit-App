import React from 'react';
import MessagesDisplay from "./components/MessagesDisplay";
import ResultsDisplay from "./components/ResultsDisplay";

const App = () =>  {
    const getQuery = async () => {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: "Give a 30 minute workout for training legs"
                })
            }

            const response = await fetch("http://localhost:8000/completions", options);
            console.log(response)
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

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
        <button id = "get-results" onClick={getQuery}>Lets Go!</button>
        <button id = "clear-chat">Clear Chat</button>
      </div>
    </div>
  )
}

export default App;
