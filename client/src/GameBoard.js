

import React, { useEffect, useState, useRef} from 'react';

const GameBoard = ({ wallRef, notAWallRef, gameBoardHeight, gameBoardWidth, gameArea}) => {
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
        canvas.style['z.index'] = 3;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[])

     
   
    
      function update(){
          makeTheBoard(gameArea)
          
      }

      // function drawRect(x, y, color,wallCounter ){
         
      //   if(!counter){
      //     contextRef.current.beginPath();
      //     contextRef.current.rect(x, y, (SCREEN_WIDTH/(gameBoardWidth)), (SCREEN_HEIGHT/(gameBoardHeight)));;
      //     contextRef.current.fillStyle = color;
      //      contextRef.current.fill();
      //      notAWallRef.current[`ball${ballCounter}`] = {}
      //      notAWallRef.current[`ball${ballCounter}`].x = x;
      //      notAWallRef.current[`ball${ballCounter}`].y = y;
      //      notAWallRef.current[`ball${ballCounter}`].color = color;
      //      notAWallRef.current[`ball${ballCounter}`].height = SCREEN_HEIGHT/(gameBoardHeight);
      //      notAWallRef.current[`ball${ballCounter}`].width = SCREEN_WIDTH/(gameBoardWidth);
      //      console.log(notAWallRef)
      //   }
      //   if(counter){
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
      //   }
       
      // }
      

    // function makesBoard(array){
    //     let num = array.length
    //     let i = 0;
    //     let j = 0;
    //     while(num > 0 ){
    //         drawRect(i,j, "purple")
    //         i += (SCREEN_WIDTH*(6/20))
    //         // j += (SCREEN_HEIGHT*(10/20))
    //         num--
            
    //     }
    // }

    function makeTheBoard(arrofarr){
    let wallCounter = 0;
    let ballCounter = 0;

    for(let arr in arrofarr){
        let yStartPosition = (parseInt(arr) / arrofarr.length) * SCREEN_HEIGHT
        
        for(let num in arrofarr[arr]){ 
            let xStartPosition  = (parseInt(num) / arrofarr[arr].length) * SCREEN_WIDTH
            if(parseInt(arrofarr[arr][num]) === 0){
              ballCounter += 1
               drawGreenSide(xStartPosition, yStartPosition, "yellow", ballCounter)
              
             } else if (parseInt(arrofarr[arr][num]) === 1){
                wallCounter += 1
               drawBlueSide(xStartPosition, yStartPosition, "black", wallCounter)
          }
          else if (parseInt(arrofarr[arr][num]) === 2){
            ballCounter += 1
           drawGreenSide(xStartPosition, yStartPosition, "pink", ballCounter)
      }
        } 
      }
    }





    function drawGreenSide(x, y, color, counter){
        contextRef.current.beginPath();
        contextRef.current.rect(x, y, (SCREEN_WIDTH/(gameBoardWidth)), (SCREEN_HEIGHT/(gameBoardHeight)));;
        contextRef.current.fillStyle = color;
         contextRef.current.fill();
         notAWallRef.current[`ball${counter}`] = {}
         notAWallRef.current[`ball${counter}`].x = x;
         notAWallRef.current[`ball${counter}`].y = y;
         notAWallRef.current[`ball${counter}`].color = color;
         notAWallRef.current[`ball${counter}`].height = SCREEN_HEIGHT/(gameBoardHeight);
         notAWallRef.current[`ball${counter}`].width = SCREEN_WIDTH/(gameBoardWidth);
       
      
    }


    function drawBlueSide(x, y, color,counter){
      
        contextRef.current.beginPath();
        contextRef.current.rect(x, y, (SCREEN_WIDTH/(gameBoardWidth)), (SCREEN_HEIGHT/(gameBoardHeight)));;
        contextRef.current.fillStyle = color;
         contextRef.current.fill();
         wallRef.current[`wall${counter}`] = {}
         wallRef.current[`wall${counter}`].x = x;
         wallRef.current[`wall${counter}`].y = y;
         wallRef.current[`wall${counter}`].color = color;
         wallRef.current[`wall${counter}`].height = SCREEN_HEIGHT/(gameBoardHeight);
         wallRef.current[`wall${counter}`].width = SCREEN_WIDTH/(gameBoardWidth);
      
    }
   

    return (
        <div>
       
        <canvas id="canvas"
        ref={canvasRef}
       
      />
        </div>
    )
}

export default GameBoard;