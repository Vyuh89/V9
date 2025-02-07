import React from 'react';

const WorldWar = ({ kingRemovalCount, queenRemovalCount, kingTime, queenTime, kingLeftDices, queenLeftDices }) => {
    return (
        <div className="counter-buttons d-flex gap-4">
            <button className="king-count-button">
                Eastern Allies🌍 Points | {kingRemovalCount} || ⏱ | {Math.floor(kingTime / 60)}:{String(kingTime % 60).padStart(2, '0')} || Countries  | 9 {kingLeftDices}
            </button>
            <button className="queen-count-button">
                Western Allies🛡️ Points | {queenRemovalCount} || ⏱ | {Math.floor(queenTime / 60)}:{String(queenTime % 60).padStart(2, '0')} || Countries | 9 {queenLeftDices}
            </button>
        </div>
    );
};

export default WorldWar;