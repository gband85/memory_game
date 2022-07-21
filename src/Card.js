import React, {useState, createRef} from "react";

const Card=(props)=>{
    const handleClick=()=>{
        if (props.clicked===false) {
        props.updateClickedCards(props.id)
        props.updateScore();
        }
        else {
            //tell game to restart
            props.resetGame();
        }
    }
return (
    <div className="card" onClick={()=>handleClick()}>
    
        <img src={props.src} alt="" height={750} width={600}></img>
        <div>
        <p>{props.common_name}</p>
        <p>{props.sci_name}</p>
        </div>
    </div>
)
}

export default Card;