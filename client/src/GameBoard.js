

import React, { useEffect, useState, useRef } from 'react';

const GameBoard = () => {
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



      class TileMap{
        constructor(x, y, color){
            this.x = x;
            this.y = y; 
            this.color = color;
        }
      }
      
      function update(){
          makesBoard(2)

      }

      function drawRect(x, y, color){  
       contextRef.current.beginPath();
       contextRef.current.rect(x, y, (SCREEN_WIDTH*(10/20)), (SCREEN_HEIGHT*(10/20)));;
       contextRef.current.fillStyle = color;
        contextRef.current.fill();
      }

    function makesBoard(num){
        let i = 0;
        let j = 0;
        while(num > 0 ){
            drawRect(i,j, "purple")
            i += (SCREEN_WIDTH*(10/20))
            // j += (SCREEN_HEIGHT*(10/20))
            num--
            
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