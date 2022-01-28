import React, { useRef } from 'react';
import GameArena from './GameArena';
import PlayerCanvas from './PlayerCanvas';
import GameBoard from './GameBoard'
const Game = () => {
   
    const wallRef = useRef({})

    return (
        <div>
            <GameArena />
            <GameBoard wallRef={wallRef}/>
            <PlayerCanvas wallRef={wallRef} />
           
        </div>
    )
}

export default Game;