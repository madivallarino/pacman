import React, { useEffect, useState, useRef } from 'react';
import GameBoard from './GameBoard';
import ghost from './ghost.png'

const GhostCanvas = ({wallRef, pacmanRef, livesCounter}) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const movingRef = useRef('down')
    const ghostRef = useRef('')
//    console.log(wallRef.current)
   

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    const directionalArray = ["up", "down", "left", "right"]

   function getRandomInt(max){
       return Math.floor(Math.random() * max)
   }
    
    
    const ghostx = {
        x: SCREEN_WIDTH * (13/20),
        y: SCREEN_HEIGHT * (5/20), 
        sizeWidth: (SCREEN_WIDTH / 10),
        sizeHeight: (SCREEN_HEIGHT / 10),
        speed: 5,
        dx: 0,
        dy: 0,
    }

   
    ghostRef.current = ghostx


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
        
        canvas.style['z.index'] = 7;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;

        update();
      },[])

function update(){
    contextRef.current.clearRect(0 , 0, canvasRef.current.width, canvasRef.current.height);
    
    drawImage()

    // pacmanAndGhostPosition(ghostRef, pacmanRef)
    // handleDirection(ghostRef)
    // handleBoundaries(ghostRef)
    
    requestAnimationFrame(update)
   
}


function pacmanAndGhostPosition(objRef, objRef2){
    
    {
       if
    (objRef.current.y + objRef.current.sizeHeight > objRef2.current.y 
     &&
     objRef.current.y < objRef2.current.sizeHeight + objRef2.current.y   
    && 
    objRef.current.x + objRef.current.sizeWidth > objRef2.current.x
    && 
    objRef.current.x < objRef2.current.x + objRef2.current.sizeWidth 
        
       ){ 
        livesCounter.current -= 1
        pacmanRef.current.x = SCREEN_WIDTH * (5/20)
        pacmanRef.current.y = SCREEN_HEIGHT * (5/20)
        
        if(livesCounter.current === 0){
            console.log('game over')
        }
        // console.log('what a butt') 
        // contextRef.current.beginPath();
        // contextRef.current.rect(objRef2.current[key].x, objRef2.current[key].y, (objRef2.current[key].width), (objRef2.current[key].height));;
        // contextRef.current.fillStyle = "white";
        //  contextRef.current.fill();

       }
    }
    
}




function findDirectionalInteger(directionalArray){
    let word = movingRef.current
    for(let direction in directionalArray ){
        if(directionalArray[direction] === word){
            return direction
        }
    }
}





function drawImage(){
    let object = new Image ()
     object.src = ghost
     contextRef.current.drawImage(object, ghostRef.current.x, ghostRef.current.y, ghostRef.current.sizeWidth, ghostRef.current.sizeHeight)
     contextRef.current.strokeStyle ='red';
        contextRef.current.strokeRect(ghostRef.current.x,ghostRef.current.y,ghostRef.current.sizeWidth,ghostRef.current.sizeHeight)
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
         stopGhost(objRef)
     }
 }

function move(objRef){
    objRef.current.x += objRef.current.dx
    objRef.current.y += objRef.current.dy
}
 function stopGhost(objRef){
     objRef.current.x = objRef.current.x
 }
 //the one w/o movign between sides 
 function moveLeft(objRef){
     
   objRef.current.dx = objRef.current.speed
    objRef.current.x -= objRef.current.dx
}


//the one w/o moving between sides
function moveRight(objRef){
   
    objRef.current.dx = objRef.current.speed
    objRef.current.x += objRef.current.dx
}
//the one w/o moving between sides
function moveDownwards(objRef){
    
    objRef.current.dy = objRef.current.speed
    objRef.current.y += objRef.current.dy
}

//the one w/o moving between sides 
function moveUpwards(objRef){
    
    objRef.current.dy = objRef.current.speed
    objRef.current.y -= objRef.current.dy
}



function setGhostDirection(){
    
    let currentDirection = findDirectionalInteger(directionalArray)
    let newNumber = getRandomInt(3)
    if(parseInt(newNumber) !== parseInt(currentDirection)){
            for(let direction in directionalArray){

                if(parseInt(direction) === newNumber){
                    
                    movingRef.current = directionalArray[direction]
                   
                }
            }
    }else {
      setGhostDirection()

    }
    
}




function handleBoundaries(objRef){
    for(let key in wallRef.current){
        if((objRef.current.x ) > (wallRef.current[key].x + wallRef.current[key].width)
        ||
        ((objRef.current.x + objRef.current.sizeWidth) <  wallRef.current[key].x)
        ||
        ((objRef.current.y) > wallRef.current[key].y + wallRef.current[key].height)
        ||
        ((objRef.current.y + objRef.current.sizeHeight) < wallRef.current[key].y)   
        )
        {
               
        } else {
            boundaries(objRef)
        }
        
    }
    
}








function boundaries(objRef){
    if(movingRef.current === 'right'){
       objRef.current.x -= objRef.current.speed 
       setGhostDirection()
       
        
    }
    else if (movingRef.current === 'left'){
        objRef.current.x += objRef.current.speed
        setGhostDirection()
    } 
    else if (movingRef.current === 'down'){
        objRef.current.y -= objRef.current.speed
        setGhostDirection()
    } 
    else if (movingRef.current === 'up'){
        objRef.current.y += objRef.current.speed
        setGhostDirection()
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

export default GhostCanvas;