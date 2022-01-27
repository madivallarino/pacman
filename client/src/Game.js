import React from 'react';
import GameArena from './GameArena';
import PlayerCanvas from './PlayerCanvas';
import GameBoard from './GameBoard'
const Game = () => {
   


    return (
        <div>
            <GameArena />
            <PlayerCanvas />
            <GameBoard />
        </div>
    )
}

export default Game;