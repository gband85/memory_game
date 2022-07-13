import React, {useState} from "react";

const Card=(props)=>{
    const [clicked, setClicked]=useState(false);
return (
    <div>
        <img src={props.src} onClick={()=>setClicked(true)} alt=""></img>
    </div>
)
}

export default Card;