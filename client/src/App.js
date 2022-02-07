import React, {useState } from 'react';
import Game from './Game'
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {

  const [lifeLost, setLifeLost ] = useState(false)




  return (
    <div className="App">
   
    
    <Game lifeLost={lifeLost} setLifeLost={setLifeLost}/>
 
    
   
    </div>
  );
}

export default App;
