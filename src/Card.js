import React, {useState, createRef} from "react";

const Card=(props)=>{
    const imgRef=createRef();
    const [clicked, setClicked]=useState(false);
return (
    <div className="card" onClick={()=>setClicked(true)}>
    
        <img src={props.src} alt="" height={750} width={600}></img>
        <div>
        <p>{props.common_name}</p>
        <p>{props.sci_name}</p>
        </div>
    </div>
)
}

export default Card;