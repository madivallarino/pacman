import React, { useEffect, useState, useRef} from 'react';

const Dots = ({ wallRef, notAWallRef, pacmanRef }) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    
    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${SCREEN_WIDTH*(8/20)}px`;
       
        canvas.style.height = `${SCREEN_HEIGHT*(13/20)}px`;
        canvas.style.position = "absolute"
        canvas.style.left = `${SCREEN_WIDTH*(6/20)}px`
        canvas.style.top = `${SCREEN_HEIGHT*(3/20)}px`
        canvas.style['z.index'] = 5;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[])

      

      // const gameArea = [
      //   [1, 0], 
      //   [1, 0]
      // ]

   
    
      function update(){
        //   makeTheDots()
          handleBallBoundaries(pacmanRef, notAWallRef)
      }

    

    // function makeTheDots(){
    // let wallCounter = 0;
    // let ballCounter = 0;

    // for(let arr in arrofarr){
    //     let yStartPosition = (parseInt(arr) / arrofarr.length) * SCREEN_HEIGHT
        
    //     for(let num in arrofarr[arr]){ 
    //         let xStartPosition  = (parseInt(num) / arrofarr[arr].length) * SCREEN_WIDTH
    //         if(parseInt(arrofarr[arr][num]) === 0){
    //           ballCounter += 1
    //            drawGreenSide(xStartPosition, yStartPosition, "green", ballCounter)
              
    //          } else if (parseInt(arrofarr[arr][num]) === 1){
    //             wallCounter += 1
    //            drawBlueSide(xStartPosition, yStartPosition, "blue", wallCounter)
    //       }
    //     }
    //   }
    // }


    // function drawGreenSide(x, y, color, counter){
    //     contextRef.current.beginPath();
    //     contextRef.current.rect(x, y, (SCREEN_WIDTH/(gameBoardWidth)), (SCREEN_HEIGHT/(gameBoardHeight)));;
    //     contextRef.current.fillStyle = color;
    //      contextRef.current.fill();
    //      notAWallRef.current[`ball${counter}`] = {}
    //      notAWallRef.current[`ball${counter}`].x = x;
    //      notAWallRef.current[`ball${counter}`].y = y;
    //      notAWallRef.current[`ball${counter}`].color = color;
    //      notAWallRef.current[`ball${counter}`].height = SCREEN_HEIGHT/(gameBoardHeight);
    //      notAWallRef.current[`ball${counter}`].width = SCREEN_WIDTH/(gameBoardWidth);
    //      console.log(notAWallRef)
      
    // }


    // function drawBlueSide(x, y, color,counter){
      
    //     contextRef.current.beginPath();
    //     contextRef.current.rect(x, y, (SCREEN_WIDTH/(gameBoardWidth)), (SCREEN_HEIGHT/(gameBoardHeight)));;
    //     contextRef.current.fillStyle = color;
    //      contextRef.current.fill();
    //      wallRef.current[`wall${counter}`] = {}
    //      wallRef.current[`wall${counter}`].x = x;
    //      wallRef.current[`wall${counter}`].y = y;
    //      wallRef.current[`wall${counter}`].color = color;
    //      wallRef.current[`wall${counter}`].height = SCREEN_HEIGHT/(gameBoardHeight);
    //      wallRef.current[`wall${counter}`].width = SCREEN_WIDTH/(gameBoardWidth);
    //     console.log(wallRef)
      
    // }
   
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
        contextRef.current.rect(objRef2.current[key].x, objRef2.current[key].y, (SCREEN_WIDTH/(objRef2.current[key].width)), (SCREEN_HEIGHT/(objRef2.current[key].height)));;
        contextRef.current.fillStyle = "white";
         contextRef.current.fill();

       }
    }
    
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