import React, { useState } from "react";
import EmojiList from "./EmojiList";
import "./styles/Apps.scss";

const App = () => {
    const [votes, setVotes] = useState({
        "😊": 0,
        "😂": 0,
        "😍": 0,
        "🤔": 0,
        "😎": 0,
    });

    const [winner, setWinner] = useState(null);

    const handleVote = (emoji) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [emoji]: prevVotes[emoji] + 1,
        }));
    };

    const showResults = () => {
        const maxVotes = Math.max(...Object.values(votes));
        const winnerEmoji = Object.keys(votes).find(
            (emoji) => votes[emoji] === maxVotes
        );
        setWinner(winnerEmoji);
    };

    return (
        <div className="app">
            <h1>Emoji Voting App</h1>
            <EmojiList votes={votes} onVote={handleVote} />
            <button className="show-results" onClick={showResults}>
                Show Results
            </button>
            {winner && (
                <div className="winner">
                    <h2>Winner:</h2>
                    <span>{winner}</span>
                </div>
            )}
        </div>
    );
};

export default App;
