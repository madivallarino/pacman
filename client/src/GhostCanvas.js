import React, { useEffect, useState, useRef } from 'react';
import GameBoard from './GameBoard';

const GhostCanvas = ({wallRef, pacmanRef, livesCounter, ghostEatAbility, rectangleHeight, rectangleWidth, SCREEN_WIDTH, SCREEN_HEIGHT, ghost}) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const movingRef = useRef('down')
    const ghostRef = useRef('')
    
    const directionalArray = ["up", "down", "left", "right"]

    
   

ghostRef.current = ghost


    // function handleAllTheGhosts(){
    //     alltheGhosts.map((ghost)=> {
    //         ghostRef.current = ghost;
    //         drawImage()
    //         pacmanAndGhost(pacmanRef, ghostRef)
    //         handleDirection(ghostRef)
    //         handleBoundaries(ghostRef)
           
    //     })
    // }

    

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth*2;
        canvas.height = window.innerHeight *2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
        canvas.style.height = `${window.innerHeight*(13/20)}px`;

        canvas.style.position = "absolute"
        // canvas.style.backgroundColor = 'green'
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
    pacmanAndGhost(pacmanRef, ghostRef)
    handleDirection(ghostRef)
    handleBoundaries(ghostRef)
    
    requestAnimationFrame(update)
   
}



function pacmanAndGhost(objRef, objRef2){
    
    if
    (objRef.current.y + objRef.current.sizeHeight > objRef2.current.y 
     &&
     objRef.current.y < objRef2.current.sizeHeight + objRef2.current.y   
    && 
    objRef.current.x + objRef.current.sizeWidth > objRef2.current.x
    && 
    objRef.current.x < objRef2.current.x + objRef2.current.sizeWidth 

       ){if(livesCounter.current === 0){
        
    }
   
    if(!ghostEatAbility.current)
   { 
     
    livesCounter.current -= 1
    
    objRef.current.x = SCREEN_WIDTH * (.9/20)
    objRef.current.y = SCREEN_HEIGHT * (.7/20)
    
   
 

    // console.log('what a butt') 
    // contextRef.current.beginPath();
    // contextRef.current.rect(objRef2.current[key].x, objRef2.current[key].y, (objRef2.current[key].width), (objRef2.current[key].height));;
    // contextRef.current.fillStyle = "white";
    //  contextRef.current.fill()
   }
      if (ghostEatAbility.current){
        objRef2.current.x = SCREEN_WIDTH * (11/20)
        objRef2.current.y = SCREEN_HEIGHT * (7/20)

        
      }     
       }
       else {
       
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


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function drawImage(){
    if (ghostEatAbility.current){
        let object = new Image ()
     object.src = ghostRef.current.scaredimage
     contextRef.current.drawImage(object, ghostRef.current.x, ghostRef.current.y, ghostRef.current.sizeWidth, ghostRef.current.sizeHeight)
     contextRef.current.strokeStyle ='red';
        contextRef.current.strokeRect(ghostRef.current.x,ghostRef.current.y,ghostRef.current.sizeWidth,ghostRef.current.sizeHeight)
    } else {
        let object = new Image ()
        object.src = ghostRef.current.image
        contextRef.current.drawImage(object, ghostRef.current.x, ghostRef.current.y, ghostRef.current.sizeWidth, ghostRef.current.sizeHeight)
        contextRef.current.strokeStyle ='red';
           contextRef.current.strokeRect(ghostRef.current.x,ghostRef.current.y,ghostRef.current.sizeWidth,ghostRef.current.sizeHeight)
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
    
 }


 
 //the one w/o movign between sides 
 function moveLeft(objRef){
     
   objRef.current.dx = objRef.current.speed
   objRef.current.dy = 0
    objRef.current.x -= objRef.current.dx
}


//the one w/o moving between sides
function moveRight(objRef){
   
    objRef.current.dx = objRef.current.speed
    objRef.current.dy = 0
    objRef.current.x += objRef.current.dx
}
//the one w/o moving between sides
function moveDownwards(objRef){
    
    objRef.current.dy = objRef.current.speed
    objRef.current.dx = 0
    objRef.current.y += objRef.current.dy
}

//the one w/o moving between sides 
function moveUpwards(objRef){
    
    objRef.current.dy = objRef.current.speed
    objRef.current.dx = 0
    objRef.current.y -= objRef.current.dy
}



function setGhostDirection(){
    
    let currentDirection = findDirectionalInteger(directionalArray)
    let newNumber = getRandomInt(4)
    
    if(parseInt(newNumber) !== parseInt(currentDirection)){
        
        movingRef.current = directionalArray[newNumber]
        return newNumber
    } else {
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