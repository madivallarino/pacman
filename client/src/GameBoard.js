

import React, { useEffect, useState, useRef } from 'react';

const GameBoard = ({ wallRef }) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    
    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
       
        canvas.style.height = `${window.innerHeight*(13/20)}px`;
        canvas.style.position = "absolute"
        canvas.style.left = `${window.innerWidth*(6/20)}px`
        canvas.style.top = `${window.innerHeight*(3/20)}px`
        canvas.style['z.index'] = 5;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[])

      const gameArea = [
          [0,0,0,0],
          [0,0,1,0],
          [0,0,1,0],
          [0,0,0,0]
                  ]


      
      
      function update(){
          makeTheBoard(gameArea)

      }

      function drawRect(x, y, color, counter){  
        if(!counter){
          contextRef.current.beginPath();
          contextRef.current.rect(x, y, (SCREEN_WIDTH*(5/20)), (SCREEN_HEIGHT*(5/20)));;
          contextRef.current.fillStyle = color;
           contextRef.current.fill();
        }
        if(counter){
          contextRef.current.beginPath();
          contextRef.current.rect(x, y, (SCREEN_WIDTH*(5/20)), (SCREEN_HEIGHT*(5/20)));;
          contextRef.current.fillStyle = color;
           contextRef.current.fill();
           wallRef.current[`x${counter}`] = x;
           wallRef.current[`y${counter}`] = y;
           
        }
       
      }

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
    wallRef.current.width = SCREEN_WIDTH*(5/20);
    wallRef.current.height = SCREEN_HEIGHT*(5/20);
    for(let arr in arrofarr){
        let yStartPosition = (parseInt(arr) / arrofarr.length) * SCREEN_HEIGHT
            
        for(let num in arrofarr[arr]){ 
            let xStartPosition  = (parseInt(num) / arrofarr[arr].length) * SCREEN_WIDTH
            if(parseInt(arrofarr[arr][num]) === 0){
               drawRect(xStartPosition, yStartPosition, "green")
             } else if (parseInt(arrofarr[arr][num]) === 1){
                wallCounter += 1
               drawRect(xStartPosition, yStartPosition, "blue", wallCounter)
          }
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

export default GameBoard;