import React, { useEffect, useState, useRef, useMemo} from 'react';
import yellowDot from './images/yellowDot.png'


const Dots = ({ wallRef, notAWallRef, pacmanRef, ghostEatAbility }) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const whiteBlocks = useRef({})
    const currentWhiteBlocks = useRef({})
    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    const arrayOfWhiteXY = useRef([])
    const [ scoreBoard, setScoreBoard ] = useState(false)

   


    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${SCREEN_WIDTH*(8/20)}px`;
       
        canvas.style.height = `${SCREEN_HEIGHT*(13/20)}px`;
        canvas.style.position = "absolute"
        canvas.style.left = `${SCREEN_WIDTH*(6/20)}px`
        canvas.style.top = `${SCREEN_HEIGHT*(3/20)}px`
        canvas.style['z.index'] = 7;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[SCREEN_HEIGHT, SCREEN_WIDTH, scoreBoard])

     

      // const gameArea = [
      //   [1, 0], 
      //   [1, 0]
      // ]

   
    
      function update(){
        //   makeTheDots()
          handleBallBoundaries(pacmanRef, notAWallRef)
          
          requestAnimationFrame(update)
      }


function handleBallBoundaries(objRef, objRef2){
    
    for(let key in objRef2.current){
       if
    (objRef.current.y + objRef.current.sizeHeight > objRef2.current[key].y 
     &&
     objRef.current.y < objRef2.current[key].height + objRef2.current[key].y   
    && 
    objRef.current.x + objRef.current.sizeWidth > objRef2.current[key].x
    && 
    objRef.current.x < objRef2.current[key].x + objRef2.current[key].width 
        
       ){ 
        
        contextRef.current.beginPath();
        contextRef.current.rect(objRef2.current[key].x, objRef2.current[key].y, (objRef2.current[key].width), (objRef2.current[key].height));;
        contextRef.current.fillStyle = "black";
         contextRef.current.fill();
         
         makeWhiteBlockHash(objRef2.current[key].x,objRef2.current[key].y, arrayOfWhiteXY)
        speedBallChecker(objRef2.current[key])
         winGame(objRef2)
        //  actualScore.current = arrayOfWhiteXY.current.length * 10
        // setScoreBoard(scoreBoard => !scoreBoard)
       }
    }
    
}


function speedBallChecker(objRef){
  
  if(objRef.color === 'purple'){
  
    pacmanRef.current.speed = 15
    ghostEatAbility.current = true
    objRef.color = 'white'
    setTimeout(()=> {
      pacmanRef.current.speed = 5
      ghostEatAbility.current = false
    }, 5000)
  }
}


function winGame(objRef2){
  if((Object.keys(objRef2.current).length) === arrayOfWhiteXY.current.length){
         
  }
}

function makeWhiteBlockHash(x, y, arrayXY){
 
  if(arrayXY.current.length === 0){
  
    return arrayXY.current.push([x,y])
  }
    for(let key of arrayXY.current){
    
      if(key[0]=== x && key[1] === y){
        return true
      } 
    
    }
     
      return arrayXY.current.push([x,y])
    
}






    return (
        <div>
        <canvas id="canvas"
        ref={canvasRef}
       
      />

        
        </div>
    )
}

export default Dots;