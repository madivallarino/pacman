
function Lives({rectangleHeight, rectangleWidth}){

    class Lives {
        constructor(x, y, sizeWidth, sizeHeight){
            this.x = x
            this.y = y
            this.sizeWidth = sizeWidth
            this.sizeHeight = sizeHeight
            
            
        }
    }
    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight

const oneLife = new Lives((SCREEN_WIDTH * (1/20)), (SCREEN_HEIGHT * (19/20)), (rectangleWidth * (8/20)), (rectangleHeight * (8/20)))
const twoLife = new Lives((SCREEN_WIDTH * (2/20)), (SCREEN_HEIGHT * (19/20)), (rectangleWidth * (8/20)), (rectangleHeight * (8/20)))
const threeLife = new Lives((SCREEN_WIDTH * (3/20)), (SCREEN_HEIGHT * (19/20)), (rectangleWidth * (8/20)), (rectangleHeight * (8/20)))

const allLives = [oneLife, twoLife, threeLife]



return (


    <div>

    </div>
)
}

    

    




export default Lives;