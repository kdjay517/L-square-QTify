import React from "react";
import "./Logo.css";
import LogoImg from "../../assets/logo.png";

const Logo=()=>{

return(
    <div className="logoDiv">
        <img src={LogoImg} width={67} alt="logo"/>
    </div>
)
};

export default Logo;