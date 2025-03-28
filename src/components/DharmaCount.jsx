import React from 'react';

const DharmaCount = ({ kingRemovalCount, queenRemovalCount, kingTime, queenTime, kingLeftDices, queenLeftDices }) => {
    return (
        <div className="counter-buttons d-flex gap-4">
            <button className="king-count-button">
            🛡️धर्म✨ Points | {kingRemovalCount} | {Math.floor(kingTime / 60)}:{String(kingTime % 60).padStart(2, '0')} | ✨संकेत | {kingLeftDices}
            </button>
            <button className="queen-count-button">
            ☠️अधर्म🔥 Points | {queenRemovalCount} | {Math.floor(queenTime / 60)}:{String(queenTime % 60).padStart(2, '0')} | ☠️संकेत | {queenLeftDices}
            </button>
        </div>
    );
};

export default DharmaCount;