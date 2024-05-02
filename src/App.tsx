import React, {useState} from 'react';
import MessagesDisplay from "./components/MessagesDisplay";
import ResultsDisplay from "./components/ResultsDisplay";

interface ChatData {
    role: string,
    content: string
}

const App = () =>  {
    const [exerciseValue, setEValue] = useState<string>("");
    const [durationValue, setDValue] = useState<string>("");
    const [chat, setChat] = useState<ChatData[]>([]);
    const getQuery = async () => {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: exerciseValue,
                    duration: durationValue
                })
            }

            const response = await fetch("http://localhost:8000/completions", options);
            const data = await response.json();
            console.log(data);
            const userMessage = {
                role: "user",
                content: "Give me a " + durationValue + " minute workout for training my " + exerciseValue
            }
            setChat(oldChat => [...oldChat, data, userMessage])
        } catch (error) {
            console.log(error);
        }
    }

    console.log(chat)

  return (
    <div className="app">
        <MessagesDisplay/>
        <div className="inputs">
            <p className="title">What would you like a workout for?</p>
            <input value={exerciseValue} onChange={e => setEValue(e.target.value)}/>
            <p className="title">Duration (min) :</p>
            <input value={durationValue} onChange={e => setDValue(e.target.value)}/>
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
