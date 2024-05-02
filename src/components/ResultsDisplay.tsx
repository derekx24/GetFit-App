import React from "react";

interface CodeDisplayProps {
    text: string
}

const ResultsDisplay = ({text} : CodeDisplayProps) =>  {
    return (
        <div className="results-display">
            <div className="result-output">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ResultsDisplay;