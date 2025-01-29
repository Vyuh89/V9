import React from 'react'

const WorldWar = ({ kingRemovalCount, queenRemovalCount, kingTime, queenTime }) => {
    return (
        <div className="counter-buttons d-flex gap-4">
            <button className="king-count-button">Eastern Bloc🌍 Points | {kingRemovalCount} | {Math.floor(kingTime / 60)}:{String(kingTime % 60).padStart(2, '0')}</button>
            <button className="queen-count-button">Western Bloc🛡️ Points | {queenRemovalCount} | {Math.floor(queenTime / 60)}:{String(queenTime % 60).padStart(2, '0')}</button>
        </div>
    )
}

export default WorldWar