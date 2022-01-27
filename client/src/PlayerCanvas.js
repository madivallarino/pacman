import React, { useEffect, useState, useRef } from 'react';
import pac1 from './pac1.png'

const PlayerCanvas = () => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const pacmanRef = useRef(null)
    const movingRef = useRef('')
   
   

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    

    const pacmanx = {
        x: 50,
        y: 50, 
        sizeWidth: (SCREEN_WIDTH / 10),
        sizeHeight: (SCREEN_HEIGHT / 10),
        dx: 10,
        dy: 10,
    }

    pacmanRef.current = pacmanx

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth*2;
        canvas.height = window.innerHeight *2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
        canvas.style.height = `${window.innerHeight*(13/20)}px`;

        canvas.style.position = "absolute"

        canvas.style.left = `${window.innerWidth*(6/20)}px`
        canvas.style.top = `${window.innerHeight*(3/20)}px`
        // canvas.style.border = '20px solid yellow'
        
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
     contextRef.current.drawImage(object, pacmanRef.current.x, pacmanRef.current.y, pacmanRef.current.sizeWidth, pacmanRef.current.sizeHeight)
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
 //the one w/o movign between sides 
 function moveLeft(){
    if( pacmanx.x < 0){
        return
    }
    
    pacmanx.x -= pacmanx.dx
}

//the one w/o moving between sides
function moveRight(){
    if( pacmanRef.current.x > (SCREEN_WIDTH - pacmanRef.current.sizeWidth) ){
        return
    }
    pacmanRef.current.x += pacmanRef.current.dx
}

//the one w/o moving between sides
function moveDownwards(){
    if(pacmanx.y > (SCREEN_HEIGHT - pacmanRef.current.sizeHeight) ){
        return
    }
    pacmanx.y += pacmanx.dy
}

//the one w/o moving between sides 
function moveUpwards(){
    if(pacmanx.y < 0){
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