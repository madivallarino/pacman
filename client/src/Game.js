import React, { useRef, useState } from 'react';
import GameArena from './GameArena';
import PlayerCanvas from './PlayerCanvas';
import GameBoard from './GameBoard'
import GhostFactory from './GhostFactory'
import ScoreBoard from './ScoreBoard';
// import Lives from './Lives';
import Dots from './Dots'

const Game = () => {
   
    const wallRef = useRef({})
    const notAWallRef = useRef({})
    const pacmanRef = useRef()
    const livesCounter = useRef(3)
    const ghostEatAbility = useRef(false)
    const ghostCounter = useRef(3)
    const [lifeLost, setLifeLost] = useState(false)

    const gameArea = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
        [0,2,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,2,0],
        [0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
        [0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
        [0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
        [0,2,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,2,0],
        [0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0],
        [0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
        [0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
        [0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                ]

const SCREEN_WIDTH = window.innerWidth
const SCREEN_HEIGHT = window.innerHeight   
const gameBoardHeight = gameArea.length
const gameBoardWidth = gameArea[0].length
const rectangleWidth = SCREEN_WIDTH/(gameBoardWidth)
const rectangleHeight = SCREEN_HEIGHT/(gameBoardHeight)




    return (
        <div>
            <ScoreBoard 
            livesCounter={livesCounter}
            rectangleWidth={rectangleWidth}
            rectangleHeight={rectangleHeight}
            SCREEN_WIDTH={SCREEN_WIDTH}
            SCREEN_HEIGHT={SCREEN_HEIGHT}
            />
            {/* <Lives rectangleHeight={rectangleHeight} rectangleWidth={rectangleWidth}/> */}
            <GameArena /> 
            <GameBoard wallRef={wallRef} 
            notAWallRef={notAWallRef}
            gameArea={gameArea}
            gameBoardHeight={gameBoardHeight}
            gameBoardWidth={gameBoardWidth}
            />

            
            <Dots wallRef={wallRef} 
            notAWallRef={notAWallRef} 
            pacmanRef={pacmanRef}
            /> 

            <GhostFactory 
                rectangleHeight={rectangleHeight}
                rectangleWidth={rectangleWidth}
                livesCounter={livesCounter}
                SCREEN_HEIGHT={SCREEN_HEIGHT}
                SCREEN_WIDTH={SCREEN_WIDTH}
                pacmanRef={pacmanRef}
                wallRef={wallRef}
            />
           
            <PlayerCanvas wallRef={wallRef} 
            notAWallRef={notAWallRef}
            pacmanRef={pacmanRef}
            rectangleHeight={rectangleHeight}
            rectangleWidth={rectangleWidth}

            />
            
           
        </div>
    )
}

export default Game;