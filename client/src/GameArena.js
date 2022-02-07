
import React, { useEffect, useState, useRef } from 'react';

const GameArena = () => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const SCREEN_WIDTH = window.innerWidth
    const SCREEN_HEIGHT = window.innerHeight
    
    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth*(8/20)}px`;
        canvas.style.backgroundColor = "red"
        canvas.style.height = `${window.innerHeight*(13/20)}px`;
        canvas.style.position = "absolute"
        canvas.style.left = `${window.innerWidth*(6/20)}px`
        canvas.style.top = `${window.innerHeight*(3/20)}px`
        canvas.style['z.index'] = 2;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;
      },[])


      

    return (
        <div>
       
        <canvas id="canvas"
        ref={canvasRef}
       
      />
        </div>
    )
}

export default GameArena;