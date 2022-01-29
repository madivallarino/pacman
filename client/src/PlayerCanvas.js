import React, { useEffect, useState, useRef } from 'react';
import pac1 from './pac1.png'

const PlayerCanvas = ({wallRef}) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const pacmanRef = useRef(null)
    const movingRef = useRef('')
   console.log(wallRef.current)
   

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    

    const pacmanx = {
        x: 50,
        y: 50, 
        sizeWidth: (SCREEN_WIDTH / 10),
        sizeHeight: (SCREEN_HEIGHT / 10),
        dx: 5,
        dy: 5,
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
    // boundaryLeftWall()
    // boundaryTopWall()
    
        // boundaryRightWall()
        // boundaryBottomWall()
    drawImage()
    handleDirection()
    // boundaries()
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
        boundaryLeftWall();
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
   
    
    pacmanx.x -= pacmanx.dx
}

// function boundaries(){
//     boundaryTopWall()
//     boundaryBottomWall()
//     boundaryLeftWall()
//     boundaryRightWall()
// }
//the one w/o moving between sides
function moveRight(){
    
    
    pacmanRef.current.x += pacmanRef.current.dx
}

//the one w/o moving between sides
function moveDownwards(){
    
    
    pacmanx.y += pacmanx.dy
}

//the one w/o moving between sides 
function moveUpwards(){
    
    pacmanx.y -= pacmanx.dy
}

function boundaryLeftWall(){
   let i = 1;
   for(let key in wallRef.current){
      if(`x${i}` in wallRef.current){
        //   console.log(wallRef.current[`x${i}`])
        //  console.log(pacmanRef.current.x+pacmanRef.current.sizeWidth)
         if((pacmanRef.current.x + pacmanRef.current.sizeWidth) < (wallRef.current[`x${i}`])){
             console.log('not a wall')
         }
         else {
            pacmanRef.current.x = wallRef.current[`x${i}`] - pacmanRef.current.sizeWidth
         }
      }
      i++
   }
}

function boundaryRightWall(){
    let i = 1;
    for(let key in wallRef.current){
       if(`x${i}` in wallRef.current){
         //   console.log(wallRef.current[`x${i}`])
         //  console.log(pacmanRef.current.x+pacmanRef.current.sizeWidth)
         
          if((pacmanRef.current.x ) > (wallRef.current[`x${i}`] + wallRef.current['width'])){
              console.log('not a wall')
          }
          else {
            pacmanRef.current.x = wallRef.current[`x${i}`] + wallRef.current['width']
          }
       }
       i++
    }
}

function boundaryTopWall(){
    let i = 1;
    for(let key in wallRef.current){
       if(`y${i}` in wallRef.current){
         //   console.log(wallRef.current[`x${i}`])
         //  console.log(pacmanRef.current.x+pacmanRef.current.sizeWidth)
         
          if((pacmanRef.current.y + pacmanRef.current.sizeHeight) < (wallRef.current[`y${i}`])){
              console.log('not a wall')
          }
          else {
              pacmanRef.current.y = wallRef.current[`y${i}`] - pacmanRef.current.sizeHeight
          }
       }
       i++
    }
}


function boundaryBottomWall(){
    let i = 1;
    for(let key in wallRef.current){
       if(`y${i}` in wallRef.current){
         //   console.log(wallRef.current[`x${i}`])
         //  console.log(pacmanRef.current.x+pacmanRef.current.sizeWidth)
         
          if((pacmanRef.current.y) > (wallRef.current[`y${i}`] + wallRef.current['height'])){
              console.log('not a wall')
          }
          else {
              pacmanRef.current.y = wallRef.current[`y${i}`] + wallRef.current['height']
          }
       }
       i++
    }
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