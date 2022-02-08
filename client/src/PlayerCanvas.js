import React, { useEffect, useState, useRef } from 'react';
import GameBoard from './GameBoard';
import pac1 from './pac1.png'

const PlayerCanvas = ({wallRef, pacmanRef, rectangleWidth, rectangleHeight, notAWallRef }) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const movingRef = useRef('')

   

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    

    const pacmanx = {
        x: SCREEN_WIDTH * (.9/20),
        y: SCREEN_HEIGHT * (.7/20), 
        sizeWidth: (rectangleWidth * (14/20)),
        sizeHeight: (rectangleHeight * (14/20)) ,
        speed: 2.5,
        dx: 0,
        dy: 0,
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
        
        canvas.style['z.index'] = 15;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[])

function update(){
    contextRef.current.clearRect(0 , 0, canvasRef.current.width, canvasRef.current.height);
    
    drawImage()
    handleDirection(pacmanRef)
    handleWallBoundaries(pacmanRef, wallRef)
    // handleBallBoundaries(pacmanRef, notAWallRef)
    requestAnimationFrame(update)
   
}


function drawImage(){
    let object = new Image ()
     object.src = pac1
     contextRef.current.drawImage(object, pacmanRef.current.x, pacmanRef.current.y, pacmanRef.current.sizeWidth, pacmanRef.current.sizeHeight)
     contextRef.current.strokeStyle ='red';
        contextRef.current.strokeRect(pacmanRef.current.x,pacmanRef.current.y,pacmanRef.current.sizeWidth,pacmanRef.current.sizeHeight)
 }


 function setDirection(event){
     if(event.key === 'd'){
         movingRef.current = 'right';
         
     }
     else if (event.key === 'a'){
         movingRef.current = 'left';
         
     } else if (event.key === 'w'){
         movingRef.current = 'up'
         
     } else if (event.key === 's'){
         movingRef.current = 'down'
            
         }
         else if(event.key === 'x'){
             movingRef.current = 'stop'
            
         }
     }
 

 function handleDirection(objRef){
     if(movingRef.current === 'right'){
       
         moveRight(objRef);
        
     } 
     if(movingRef.current === 'left'){
         moveLeft(objRef);
         
     } 
     if(movingRef.current === 'up'){
         moveUpwards(objRef);
        
     }
     if(movingRef.current === 'down'){
         moveDownwards(objRef);
        
     }
     if(movingRef.current === 'stop'){
         stopPacman(objRef)
     }
 }

function move(objRef){
    objRef.current.x += objRef.current.dx
    objRef.current.y += objRef.current.dy
}
 function stopPacman(objRef){
     objRef.current.x = objRef.current.x
 }
 //the one w/o movign between sides 
 function moveLeft(objRef){
     movingRef.current = 'left'
   objRef.current.dx = objRef.current.speed
    objRef.current.x -= objRef.current.dx
}


//the one w/o moving between sides
function moveRight(objRef){
    movingRef.current = 'right'
    objRef.current.dx = objRef.current.speed
    objRef.current.x += objRef.current.dx
}
//the one w/o moving between sides
function moveDownwards(objRef){
    movingRef.current = 'down'
    objRef.current.dy = objRef.current.speed
    objRef.current.y += objRef.current.dy
}

//the one w/o moving between sides 
function moveUpwards(objRef){
    movingRef.current = 'up'
    objRef.current.dy = objRef.current.speed
    objRef.current.y -= objRef.current.dy
}

function handleWallBoundaries(objRef, objRef2){
    for(let key in objRef2.current){
        if((objRef.current.x ) > (objRef2.current[key].x + objRef2.current[key].width)
        ||
        ((objRef.current.x + objRef.current.sizeWidth) <  objRef2.current[key].x)
        ||
        ((objRef.current.y) > objRef2.current[key].y + objRef2.current[key].height)
        ||
        ((objRef.current.y + objRef.current.sizeHeight) < objRef2.current[key].y)   
        )
        {
               
        } else {
            
            boundaries(objRef)
        }
        
    }
    
}


// function handleBallBoundaries(objRef, objRef2){
//     for(let key in objRef2.current){
//         if((objRef.current.x ) > (objRef2.current[key].x + objRef2.current[key].width)
//         ||
//         ((objRef.current.x + objRef.current.sizeWidth) <  objRef2.current[key].x)
//         ||
//         ((objRef.current.y) > objRef2.current[key].y + objRef2.current[key].height)
//         ||
//         ((objRef.current.y + objRef.current.sizeHeight) < objRef2.current[key].y)   
//         )
//         {
               
//         }
//     }
    
// }





function boundaries(objRef, i){
    if(movingRef.current === 'right'){
    //    objRef.current.dx = 0
       objRef.current.x -= objRef.current.speed 

        
    }
    else if (movingRef.current === 'left'){
        objRef.current.x += objRef.current.speed
    } 
    else if (movingRef.current === 'down'){
        pacmanRef.current.y -= objRef.current.speed
    } 
    else if (movingRef.current === 'up'){
        pacmanRef.current.y += objRef.current.speed
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