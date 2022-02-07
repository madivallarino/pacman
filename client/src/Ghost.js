 import GhostCanvas from "./GhostCanvas"

 
 class Ghost {
    constructor(x, y, sizeWidth, sizeHeight, speed, dx, dy ){
        this.x = x
        this.y = y
        this.sizeWidth = sizeWidth
        this.sizeHeight = sizeHeight
        this.speed = speed
        this.dx = dx
        this.dy = dy
    }


   moveLeft(){
       this.dx = this.speed
       this.x -= this.dx
   }


   moveRight(){
       this.dx = this.speed
       this.x += this.dx
   }

   moveDown(){
       this.dy = this.speed
       this.y += this.dy
   }

   moveUp(){
       this.dy = this.speed
       this.y -= this.dy 
   }
}


const SCREEN_WIDTH = window.innerWidth
const SCREEN_HEIGHT = window.innerHeight 









export default Ghost 

    
    