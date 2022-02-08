import React, { useEffect, useState, useRef } from 'react';
import pac1 from './pac1.png'
import Lives from './Lives'

const ScoreBoard = ({livesCounter, rectangleWidth, rectangleHeight, SCREEN_HEIGHT, SCREEN_WIDTH}) => {
    
    
    
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const pacmanRef = useRef({})
    
    
   
    const pacmanObj = {
        x: (SCREEN_WIDTH * (1/20)),
        y: (SCREEN_HEIGHT * (19/20)), 
        sizeWidth: (rectangleWidth * (16/20)),
        sizeHeight: (rectangleHeight * (16/20)) ,
        
     }



   
    pacmanRef.current = pacmanObj







    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
        canvas.style.backgroundColor = "white"
        canvas.style.height = `${window.innerHeight*(12/20)}px`;
        canvas.style.position = "absolute"
        canvas.style.left = `${window.innerWidth*(6/20)}px`
        canvas.style.top = `${window.innerHeight*(5/20)}px`
        canvas.style.bottom = `${window.innerHeight*(14/20)}px`
        canvas.style['z.index'] = 0;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;
      
update()
       
      },[])


      function update(){
        
        livesDrawer()
         requestAnimationFrame(update)
      }

     
      
      function livesDrawer(){
          let x = 0;
        if(livesCounter.current === 3){
            
            contextRef.current.clearRect(0 , 0, canvasRef.current.width, canvasRef.current.height);
            drawImage(x)
            drawImage((x + 1))
            drawImage((x + 2))
        } else if (livesCounter.current === 2){
            contextRef.current.clearRect(0 , 0, canvasRef.current.width, canvasRef.current.height);
            drawImage(x)
            drawImage(x + 1)
        } else if (livesCounter.current === 1){
            contextRef.current.clearRect(0 , 0, canvasRef.current.width, canvasRef.current.height);
            drawImage(x)
        }
    }





      function drawImage(num){
         
        let object = new Image ()
         object.src = pac1
         contextRef.current.drawImage(object, SCREEN_WIDTH * (num/20), (SCREEN_HEIGHT * (19/20)), pacmanObj.sizeWidth, pacmanObj.sizeHeight)
         contextRef.current.strokeStyle ='red';
            contextRef.current.strokeRect(object, SCREEN_WIDTH * (num/20), (SCREEN_HEIGHT * (19/20)), pacmanObj.sizeWidth, pacmanObj.sizeHeight)
     }

     

      

    return (
        <div>
       
        <canvas id="canvas"
        ref={canvasRef}
       
        />

      
        </div>
    )
}

export default ScoreBoard;