
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
        canvas.style.width = `${window.innerWidth}px`;
      
        canvas.style.height = `${window.innerHeight}px`;
        canvas.style.position = "absolute"
        canvas.style.left = '0'
        canvas.style['z.index'] = 0;
        const context = canvas.getContext("2d");
        context.scale(2,2)
        contextRef.current = context;
      },[])


    return (
        <div>
        <canvas id="canvas"
        ref={canvasRef}
        tabIndex={0}
      />
        </div>
    )
}

export default GameArena;