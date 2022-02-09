import GhostCanvas from './GhostCanvas'
import redbuddy from './images/redbuddy.png'
import yellowbuddy from './images/yellowbuddy.png'
import greenbuddy from './images/greenbuddy.png'
import pinkbuddy from './images/pinkbuddy.png'
import scaredghost from './images/scaredghost.png'


function GhostFactory({rectangleHeight, rectangleWidth, livesCounter, SCREEN_HEIGHT, SCREEN_WIDTH, pacmanRef, wallRef, ghostEatAbility={ghostEatAbility}}){
    


    class Ghost {
        constructor(x, y, sizeWidth, sizeHeight, speed, dx, dy, image, scaredimage ){
            this.x = x
            this.y = y
            this.sizeWidth = sizeWidth
            this.sizeHeight = sizeHeight
            this.speed = speed
            this.dx = dx
            this.dy = dy
            this.image = image
            this.scaredimage = scaredimage
        }
    
    
    
    }

    const ghost = new Ghost (SCREEN_WIDTH * (11/20),  SCREEN_HEIGHT * (7/20), (rectangleWidth * (18/20)),(rectangleHeight * (18/20)),5, 0, 0, redbuddy, scaredghost)

    const ghost2 = new Ghost(SCREEN_WIDTH * (9/20),  SCREEN_HEIGHT * (8/20), (rectangleWidth * (18/20)),(rectangleHeight * (18/20)), 5, 0, 0 , yellowbuddy, scaredghost)
    
    const ghost3 = new Ghost(SCREEN_WIDTH * (11/20),  SCREEN_HEIGHT * (8/20),(rectangleWidth * (18/20)),(rectangleHeight * (18/20)), 5, 0, 0, greenbuddy, scaredghost)
    
    const ghost4 = new Ghost(SCREEN_WIDTH * (9/20),  SCREEN_HEIGHT * (7/20), (rectangleWidth * (18/20)),(rectangleHeight * (18/20)),5, 0, 0 , pinkbuddy, scaredghost)


const alltheGhosts = [ghost, ghost2, ghost3, ghost4]


const makeTheGhosts = alltheGhosts.map((ghost)=>  
                                                <GhostCanvas 
                                                key={ghost.id}
                                                ghost={ghost}
                                                rectangleHeight={rectangleHeight}
                                                rectangleWidth={rectangleWidth}
                                                livesCounter={livesCounter}
                                                SCREEN_HEIGHT={SCREEN_HEIGHT}
                                                SCREEN_WIDTH={SCREEN_WIDTH}
                                                pacmanRef={pacmanRef}
                                                wallRef={wallRef}
                                                ghostEatAbility={ghostEatAbility}
                                                /> )



    return(
        <>
        {makeTheGhosts}
        </>
    )
}


export default GhostFactory;