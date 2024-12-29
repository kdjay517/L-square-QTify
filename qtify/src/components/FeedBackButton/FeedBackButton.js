import React from "react";
import "./FeedBackButton.css";

const Button=({children})=>{
    return(
        <button className="button">
        {children}
        </button>
    )
}

export default Button;