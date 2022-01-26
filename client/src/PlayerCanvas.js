import React, { useEffect, useState, useRef } from 'react';
import pac1 from './pac1.png'

const PlayerCanvas = () => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const movingRef = useRef('')
   const pacmanx = {
        x: 50,
        y: 50, 
        dx: 10,
        dy: 10,
    }
   

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    
    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = SCREEN_WIDTH * 2;
        canvas.height = SCREEN_HEIGHT * 2;
        canvas.style.width = `${SCREEN_WIDTH }px` ;
        canvas.style.height = `${SCREEN_HEIGHT}px`  ;
        canvas.style.backgroundColor = "blue"
        canvas.style.position = "absolute"
        canvas.style.left = `${400}px`
        canvas.style.right = `${400}px`
        canvas.style['z.index'] = 10;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[])

function update(){
    contextRef.current.clearRect(0 , 0, canvasRef.current.width, canvasRef.current.height);
    drawImage()
    handleDirection()
    requestAnimationFrame(update)
}

function drawImage(){
    let object = new Image ()
     object.src = pac1
     contextRef.current.drawImage(object, pacmanx.x, pacmanx.y)
 }


 function setDirection(event){
     if(event.key === 'd'){
         movingRef.current = 'right';
         console.log('firing to the right')
     }
     else if (event.key === 'a'){
         movingRef.current = 'left';
         console.log('to the left we go')
     } else if (event.key === 'w'){
         movingRef.current = 'up'
         console.log('were going up and up')
     } else if (event.key === 's'){
         movingRef.current = 'down'
             console.log('were going towards the ground')
         }
     }
 

 function handleDirection(){
     if(movingRef.current === 'right'){
         moveRight();
     } 
     if(movingRef.current === 'left'){
         moveLeft();
     } 
     if(movingRef.current === 'up'){
         moveUpwards();
     }
     if(movingRef.current === 'down'){
         moveDownwards();
     }
 }

 function moveLeft(){
     if(pacmanx.x > canvasRef.current.width || pacmanx.x < 0){
         return
     }
     pacmanx.x -= pacmanx.dx
 }
 function moveRight(){
    if(pacmanx.x > canvasRef.current.width || pacmanx.x > 1800){
        return
    }
    pacmanx.x += pacmanx.dx
}
function moveDownwards(){
    if(pacmanx.y > canvasRef.current.height || pacmanx.y > 1000){
        return
    }
    pacmanx.y += pacmanx.dy
}
function moveUpwards(){
    if(pacmanx.y > canvasRef.current.height || pacmanx.y < 0){
        return
    }
    pacmanx.y -= pacmanx.dy
}




    return (
        <div>
        <canvas id="canvas"
        ref={canvasRef}
        onKeyDown={setDirection}
        tabIndex = "0"
      />
     
        </div>
    )
    }

export default PlayerCanvas;