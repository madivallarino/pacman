import React, { useEffect } from "react"

function Scoreboard({ scoreBoard, actualScore}){
 


    useEffect(()=> {

    }, [])

    

    return(
        <div>
            Scoreboard {actualScore.current}
        </div>
    )
}

export default Scoreboard