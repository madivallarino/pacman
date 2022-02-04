import React, { useRef } from 'react';
import GameArena from './GameArena';
import PlayerCanvas from './PlayerCanvas';
import GameBoard from './GameBoard'
import GhostCanvas from './GhostCanvas'
import Dots from './Dots'
const Game = () => {
   
    const wallRef = useRef({})
    const notAWallRef = useRef({})
    const pacmanRef = useRef()
    const livesCounter = useRef(5)
   
    return (
        <div>
            <GameArena />
            <GameBoard wallRef={wallRef} 
            notAWallRef={notAWallRef}
            />
            <Dots wallRef={wallRef} notAWallRef={notAWallRef} pacmanRef={pacmanRef}/> 
            <GhostCanvas 
            wallRef={wallRef} 
            pacmanRef={pacmanRef}
            livesCounter={livesCounter}
            />
            <PlayerCanvas wallRef={wallRef} 
            notAWallRef={notAWallRef}
            pacmanRef={pacmanRef}/>
            
           
        </div>
    )
}

export default Game;