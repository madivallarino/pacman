import React, { useEffect, useState, useRef } from 'react';
import pac1 from './pac1.png'
import Lives from './Lives'

const ScoreBoard = ({livesCounter}) => {
    
    
    
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    let numberofLives = livesCounter.current
    
   

   


    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
        canvas.style.backgroundColor = "blue"
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
        
        
          requestAnimationFrame(update)
      }

     






      function drawImage(obj){
         
        let object = new Image ()
         object.src = pac1
         contextRef.current.drawImage(object, obj.x, obj.y, obj.sizeWidth, obj.sizeHeight)
         contextRef.current.strokeStyle ='red';
            contextRef.current.strokeRect(obj.x,obj.y,obj.sizeWidth,obj.sizeHeight)
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