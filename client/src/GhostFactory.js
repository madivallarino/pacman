import GhostCanvas from './GhostCanvas'

import red from './red.png'
import darkblue from './darkblue.png'
import thirdghost from './ghost3.png'


function GhostFactory({rectangleHeight, rectangleWidth, livesCounter, SCREEN_HEIGHT, SCREEN_WIDTH, pacmanRef, wallRef}){
    


    class Ghost {
        constructor(x, y, sizeWidth, sizeHeight, speed, dx, dy, image ){
            this.x = x
            this.y = y
            this.sizeWidth = sizeWidth
            this.sizeHeight = sizeHeight
            this.speed = speed
            this.dx = dx
            this.dy = dy
            this.image = image
        }
    
    
    
    }

    const ghost = new Ghost (SCREEN_WIDTH * (11/20),  SCREEN_HEIGHT * (7/20), (rectangleWidth * (18/20)),(rectangleHeight * (18/20)),5, 0, 0, red)

    const ghost2 = new Ghost(SCREEN_WIDTH * (9/20),  SCREEN_HEIGHT * (8/20), (rectangleWidth * (18/20)),(rectangleHeight * (18/20)), 5, 0, 0 , darkblue)
    
    const ghost3 = new Ghost(SCREEN_WIDTH * (11/20),  SCREEN_HEIGHT * (8/20),(rectangleWidth * (18/20)),(rectangleHeight * (18/20)), 5, 0, 0, thirdghost )
    
    const ghost4 = new Ghost(SCREEN_WIDTH * (9/20),  SCREEN_HEIGHT * (7/20), (rectangleWidth * (18/20)),(rectangleHeight * (18/20)),5, 0, 0 , darkblue)


const alltheGhosts = [ghost, ghost2, ghost3, ghost4]


const makeTheGhosts = alltheGhosts.map((ghost)=>  
                                                <GhostCanvas 
                                                ghost={ghost}
                                                rectangleHeight={rectangleHeight}
                                                rectangleWidth={rectangleWidth}
                                                livesCounter={livesCounter}
                                                SCREEN_HEIGHT={SCREEN_HEIGHT}
                                                SCREEN_WIDTH={SCREEN_WIDTH}
                                                pacmanRef={pacmanRef}
                                                wallRef={wallRef}
                                                /> )



    return(
        <>
        {makeTheGhosts}
        </>
    )
}


export default GhostFactory;