import React from "react";

const EmojiList = ({ votes, onVote }) => {
    return (
        <div className="emoji-list">
            {Object.keys(votes).map((emoji) => (
                <div key={emoji} className="emoji-item">
                    <button onClick={() => onVote(emoji)}><span className="emoji">{emoji}</span>Vote</button>
                    <span className="votes">Votes: {votes[emoji]}</span>
                </div>
            ))}
        </div>
    );
};

export default EmojiList;
