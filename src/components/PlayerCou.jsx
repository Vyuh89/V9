import React from 'react';

const PlayerCountt = ({ kingRemovalCount, queenRemovalCount, kingTime, queenTime, kingLeftDices, queenLeftDices }) => {
    return (
        <div className="counter-buttons d-flex gap-4">
            <button className="king-count-button">
            EasternAllies 🛡️ Points | {kingRemovalCount} | {Math.floor(kingTime / 60)}:{String(kingTime % 60).padStart(2, '0')} | LeftAllies | {kingLeftDices}
            </button>
            <button className="queen-count-button">
            WesternAllies ⚔️ Points | {queenRemovalCount} | {Math.floor(queenTime / 60)}:{String(queenTime % 60).padStart(2, '0')} | LeftAllies | {queenLeftDices}
            </button>
        </div>
    );
};

export default PlayerCountt; 